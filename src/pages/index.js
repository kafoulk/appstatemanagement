import React from 'react';
import { Grid, Button, Header, ItemDescription } from 'semantic-ui-react';
import CatImage from './components/CatImage';
import useAppState from '@/useHooks/useAppState';

export default function Home() {
  const appState = useAppState();

  console.log(appState);

  function getCatImages() {
    fetch(`https://api.thecatapi.com/v1/images/search?mime_types=jpg,png&format=json&has_breeds=true&order=RANDOM&limit=10`)
      .then((r) => r.json())
      .then((r) => {
        appState.updateAppState({ catImages: r });
      })
      .catch((e) => {
        console.warn(e);
      });
  }

  function saveCatImage(selectedCat) {
    appState.updateAppState({ favoriteCats: appState.favoriteCats.concat(selectedCat) });
  }

  return (
    <>
      <Grid columns='1'>
        <Grid.Column>
          <Header as='h1'>Random Cats</Header>
        </Grid.Column>
        <Grid.Column>
          <Button content='Reload Cats' icon='sync' color='blue' onClick={getCatImages} />
        </Grid.Column>
        <Grid.Row columns='5'>
          {appState.catImages.map((catImage) => {
            return <CatImage key={catImage.id} src={catImage.url} onClick={() => saveCatImage(catImage)}></CatImage>
          })}
        </Grid.Row>
      </Grid>
    </>
  );
}