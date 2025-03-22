import React from "react";
import DisplayBalance from './DisplayBalance';
import { Grid, Segment } from "semantic-ui-react";

function DisplayBalances() {
    return(
        <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance title='Income' value='123' color='green' size='tiny' />
            </Grid.Column>
            <Grid.Column>
              <DisplayBalance title='Expences' value='123' color='red' size='tiny' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
}

export default DisplayBalances