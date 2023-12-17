import React from 'react';
// import { useRouter } from 'next/router';
import { Grid, Popup, Button, ItemDescription } from 'semantic-ui-react';
import useAppState from '@/useHooks/useAppState';
import CatImage from './CatImage.js'


export default function CatDetails({}) {
    const appState = useAppState();
    const [catInfo] = catDetails({ ItemDescription: [] });
  
    console.log(catInfo);
  

  
    const ItemDescription =
      catInfo.id.length === 0
        ? []
        : catInfo.id.map((id) => {
            return (
                <Grid.Row columns='5'>
                {appState.catDetails.map((cat) => {
                    return <CatImage key={cat.id} src={cat.url} onClick={onClick}/>
                })}
                </Grid.Row>
            );
    });
}