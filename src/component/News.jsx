import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page : 1
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=cd7be7175f6d4d859bb84f6cd37d993a&page=1&pageSize=20";
        let data = await fetch(url)
        let parsedata = await data.json();
        console.log(parsedata);
        this.setState({ articles: parsedata.articles })
    }

    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=cd7be7175f6d4d859bb84f6cd37d993a&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url)
        let parsedata = await data.json();
        console.log(parsedata);

        this.setState({
            page: this.state.page - 1,
            articles: parsedata.articles
        })
    }

    handleNextClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=cd7be7175f6d4d859bb84f6cd37d993a&page=${this.state.page+1}&pageSize=20`;
        let data = await fetch(url)
        let parsedata = await data.json();
        console.log(url);

        this.setState({
            page: this.state.page + 1,
            articles: parsedata.articles
        })
    }

    render() {
        return (
            <div className='container my-3'>
                <h2>Daily News - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4 my-2" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} url={element.url} desc={element.description ? element.description.slice(0, 88) : ""} ImgURL={element.urlToImage ? element.urlToImage : "https://t3.ftcdn.net/jpg/03/27/55/60/360_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg"} /></div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page<=1} onClick={this.handlePrevClick} className="btn btn-dark">&larr; Prev</button>
                    <button type="button" onClick={this.handleNextClick} className="btn btn-dark">Next &rarr; </button>
                </div>
            </div>
        );
    }
}
