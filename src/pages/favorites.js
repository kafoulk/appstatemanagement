import React from 'react';
import useAppState from '@/useHooks/useAppState';
import {Grid, Button, Header} from 'semantic-ui-react';
import CatImage from './components/CatImage';


export default function Favorites() {
    const appState = useAppState();
    // const [catInfo, catDetails] = getCatDetails({ description: [] });

    function changeName() {
        const titles = ['Kiri', 'Mantis', 'Blue'];
        const randomTitleIndex = Math.floor(Math.random() * titles.length);

        appState.updateAppState({ user: `${titles[randomTitleIndex]}` });
    }


    return (
        <>
            <Grid columns={1}>
                <Grid.Column>
                    <Header as='h1'>{appState.user}'s Favorites</Header>
                </Grid.Column>
                <Grid.Column columns='1'>
                    <Grid.Row>
                    <Button content='Change Name' color='purple' icon='sync' onClick={changeName}/>
                    </Grid.Row>
                </Grid.Column>
                <Grid.Row columns='5'>
                {appState.favoriteCats.map((cat) => {
                return <CatImage key={cat.id} src={cat.url} onClick={CatImage}/>
                })};
                </Grid.Row>
            </Grid>
        </>
    );
}