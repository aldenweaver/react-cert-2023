import Container from '@mui/material/Container';

function House({current}) {


    if(!current){
        return <h1>Select a house</h1>
    }

    return (  
        <>
            <Container fixed>
                <h1>Name: {current.FacilityName}</h1>
                <h2>Address: {current.FacilityAddress}</h2>
                <h3>Borough: {current.Borough}</h3>
            </Container>
        </>
    );
}

export default House;