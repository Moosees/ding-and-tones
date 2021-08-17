import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import useDimensions from '../../hooks/useDimensions';
import { getScaleById } from '../../redux/scale/scale.actions';
import { startSearch } from '../../redux/search/search.actions';
import searchOptions from '../../redux/search/search.options';
import DividerLine from '../shared/dividerLine/DividerLine';
import Loading from '../shared/loading/Loading';
import Edit from './edit/Edit';
import Info from './info/Info';
import Results from './results/Results';
import { ScaleContainer, Section } from './scale.styles';
import Search from './search/Search';

const Scale = ({
  getScaleById,
  isSearching,
  scalesFetchTried,
  scaleUi,
  startSearch,
}) => {
  const { scaleId } = useParams();
  const { replace } = useHistory();
  const { isMobile } = useDimensions();
  const [newId, setNewId] = useState(false);

  const { hasChanges, isDeleting, isFetching, isSaving } = scaleUi;
  const isWorking = isDeleting || isFetching || isSaving || newId;

  useEffect(() => {
    if (isWorking || hasChanges) return;

    const getScaleByUrl = async () => {
      const url = await getScaleById(scaleId);
      replace(url);
      setNewId(false);
    };

    if (scaleId && !scaleUi.scaleId) {
      setNewId(true);
      getScaleByUrl();
    }
  }, [getScaleById, hasChanges, isWorking, replace, scaleId, scaleUi.scaleId]);

  useEffect(() => {
    if (isWorking || !hasChanges) return;

    replace('/scale');
  }, [hasChanges, isWorking, replace]);

  useEffect(() => {
    if (isWorking || hasChanges) return;

    if (!scaleId && scaleUi.scaleId) {
      replace(`/scale/${scaleUi.scaleId}`);
    }
  }, [getScaleById, hasChanges, isWorking, replace, scaleId, scaleUi.scaleId]);

  useEffect(() => {
    if (scalesFetchTried || isSearching || isWorking) return;

    startSearch(searchOptions.scales.latest);
  }, [isSearching, isWorking, scalesFetchTried, startSearch]);

  return (
    <ScaleContainer>
      <Section>
        {isFetching ? (
          <Loading />
        ) : (
          <>
            <Info />
            <DividerLine />
            <Edit />
          </>
        )}
      </Section>
      {!isMobile && <DividerLine vertical />}
      <Section>
        {!scalesFetchTried ? (
          <Loading />
        ) : (
          <>
            <Search />
            <Results />
          </>
        )}
      </Section>
    </ScaleContainer>
  );
};

const mapStateToProps = ({ scale, search }) => ({
  scaleUi: scale.ui,
  isSearching: search.isSearching,
  scalesFetchTried: search.scalesFetchTried,
});

export default connect(mapStateToProps, { getScaleById, startSearch })(Scale);
