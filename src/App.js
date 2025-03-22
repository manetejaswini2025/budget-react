import logo from './logo.svg';
import './App.css';
import { Container, Grid, Icon, Segment, Statistic, Header, Form, ButtonGroup, Button } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <Container>
        <Header as='h1'>Budget</Header>

        <Statistic size='small'>
          <Statistic.Label>Your Baluance</Statistic.Label>
          <Statistic.Value>1234</Statistic.Value>
        </Statistic>

        <Segment textAlign='center'>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <Statistic size='tiny' color='green'>
                    <Statistic.Label style={{textAlign:'left'}}>
                      Income
                    </Statistic.Label>
                    <Statistic.Value>1234</Statistic.Value>
                </Statistic>
              </Grid.Column>
              <Grid.Column>
                <Statistic size='tiny' color='red'>
                    <Statistic.Label style={{textAlign:'left'}}>
                      Expenses:
                    </Statistic.Label>
                    <Statistic.Value>1234</Statistic.Value>
                </Statistic>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Header as='h3'>History</Header>
        <Segment color='red'>
          <Grid columns={3} textAlign='right'>
            <Grid.Row>
              <Grid.Column width={10} textAlign='left'>dssf</Grid.Column>
              <Grid.Column width={3} textAlign='right'>123</Grid.Column>
              <Grid.Column width={3}>
                <Icon name='edit' bordered/>
                <Icon name='trash' bordered/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={10} textAlign='left'>dssf</Grid.Column>
              <Grid.Column width={3} textAlign='right'>123</Grid.Column>
              <Grid.Column width={3}>
                <Icon name='edit' bordered/>
                <Icon name='trash' bordered/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={10} textAlign='left'>dssf</Grid.Column>
              <Grid.Column width={3} textAlign='right'>123</Grid.Column>
              <Grid.Column width={3}>
                <Icon name='edit' bordered/>
                <Icon name='trash' bordered/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <header as='h3'>Add new transaction</header>
        <Form unstackable>
          <Form.Group>
            <Form.Input 
            icon='tags' 
            width={12}
            label='Description'
            placeholder='New shinny thing'
            ></Form.Input>
            <Form.Input 
            width={4}
            label='Value'
            placeholder="100.00"
            icon='dollar'
            iconPosition='left'
            ></Form.Input>
          </Form.Group>
          <ButtonGroup style={{ marginTop:20 }}>
            <Button>Cancel</Button>
            <Button.Or/>
            <Button primary>Ok</Button>
          </ButtonGroup>
        </Form>
      </Container>
    </div>
  );
}

export default App;
