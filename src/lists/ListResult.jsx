// import React from 'react';
// import WorkOrders from './components/WorkOrders.js'
// import Sort from './components/Sort.js'
// import Search from './components/Search.js'
// import './App.css';
class App extends React.Component {
state = {
    date: [],
    sortType: "asc",
    listNames: [],
    foundlistNames: null,
    filtered: false
  }
fetchDuration = () => {
    fetch(`http://localhost:4000/list/${list.Duration}`)
    .then(res => res.json())
    .then(res => {
      let sorted = res.duration.sort(function(a, b) {
          return a.deadline - b.deadline
      })
      this.setState({ duration: sorted}, this.fetchlistNames)
    })
  }
fetchlistNames = () => {
    this.state.workOrders.map(order => {
      fetch(`https://www.hatchways.io/api/assessment/workers/${order.workerId}`)
      .then(r => r.json())
      .then(r => {
        this.setState({ workers: [...this.state.workers, r.worker] })
      })
    })
  }
sort = (sortType) => {
    if (sortType === "asc") {
      this.setState({workOrders: this.state.workOrders.sort(function(a, b) {
          return a.deadline - b.deadline
        }), sortType: "asc"
      });
    } else if (sortType === "desc") {
      this.setState({workOrders: this.state.workOrders.sort(function(a, b) {
          return b.deadline - a.deadline
        }), sortType: "desc"
      });
    }
  }
filterWorker = (input) => {
    let worker = this.state.workers.find( worker => {
        return worker.name === input
    })
    this.setState({ foundWorker: worker, filtered: true})
  }
renderSort = () => {
    if (this.state.workOrders.length > 0
      && this.state.workers.length > 0) {
      return <Sort sort={this.sort} />
    }
  }
renderOrders = () => {
    if (this.state.workers.length === this.state.workOrders.length
      && this.state.workOrders.length > 0 && this.state.sortType === "asc") {
      return <WorkOrders orders={this.state.workOrders} sort={this.sort}
        workers={this.state.workers} filtered={this.state.filtered}
        foundWorker={this.state.foundWorker} />
    } else if (this.state.sortType === "desc") {
      return <WorkOrders orders={this.state.workOrders} sort={this.sort}
        workers={this.state.workers} filtered={this.state.filtered}
        foundWorker={this.state.foundWorker} />
    }
  }
componentDidMount = () => {
    this.fetchOrders()
  }
render() {
    return (
      <div className="App">
        <Search filterWorker={this.filterWorker}/>
        <br/>
        {this.renderSort()}
        {this.renderOrders()}
      </div>
    )
  }
}
export default App