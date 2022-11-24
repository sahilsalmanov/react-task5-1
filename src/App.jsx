import React, { Component } from 'react'

 class App extends Component {

    state = {
    from : '',
    to : '',
    amount: ''

    }
    getData = () => {

        fetch("https://acb-api.algoritmika.org/api/transaction")
        .then(res => res.json())
        .then(data => { 
          this.setState({ from: data[0].from,to: data[0].to, amount: data[0].amount })

        
        });
      };
    


      componentDidMount() {
        this.getData();
      }


  render() {
    const { from ,to,amount} = this.state;
    return (
      <>
    <p>{from}  {to}  {amount}</p>
    </>
    )
  }
}
export default App
