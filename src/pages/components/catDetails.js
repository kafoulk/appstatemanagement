import React from 'react';
// import { useRouter } from 'next/router';
import { Grid, Popup, Button, ItemDescription } from 'semantic-ui-react';
import useAppState from '@/useHooks/useAppState';
import CatImage from './CatImage.js'


export default function CatDetails({}) {
    const appState = useAppState();
    const [catInfo] = getCatDetails({ ItemDescription: [] });
    // const router = useRouter();
  
    // React.useEffect(function () {
    //   if (catInfo.id !== router.description && router.description) {
    //     console.log('Load in cat info', router.description);
    //     fetch(`https://api.thecatapi.com/v1/images/${router.description}`)
    //       .then((r) => r.json())
    //       .then(function (r) {
    //         setCatDetails(r);
    //       })
    //       .catch((e) => setCatDetails({ loading: false, name: router.query.name, stats: [] }));
    //   }
    // };
  
    console.log(catInfo);
  
    // console.log(router.query);
  
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