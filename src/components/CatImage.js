import React from 'react';
import useAppState from '@/useHooks/useAppState';
import { Popup, Button, Image, Grid, ItemDescription, Card } from 'semantic-ui-react';
import CatDetails from './catDetails';

export default function CatImage({ src, children, onClick }) {
  const appState = useAppState();
  return (
    <>
      <Grid.Row columns='2'>
        <Grid.Column>
          <Popup
          trigger={<Image src={src} />}
          on='click'
          content={<Button color='green' icon='heart' content={ children || 'Save' } onClick={onClick} />}
          />
        </Grid.Column>
        <Grid.Column>
          <Popup
          trigger={<ItemDescription src={src} />}
          on='click'
          content={<Card color='whitesmoke' content={ children || 'Load' } onClick={onClick} />}
          />
          {appState.catDetails.map((cat) => {
          return <CatDetails key={cat.id} src={cat.url} onClick={CatImage}/>
          })}
        </Grid.Column>
      </Grid.Row>
    </>
  );
}