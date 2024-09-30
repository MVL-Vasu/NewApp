import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class News extends Component {
    render() {
        return (
            <div className='container my-3'>
                <h2>Daily News - Top Headlines</h2>
                <div className="row">
                    <div className="col-md-4 my-2"><NewsItem title="MyTitle" ImgURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfW7v1P0xKgsEAkEzsrsLqKXDVMTfgTum0dQ&s" /></div>
                    <div className="col-md-4 my-2"><NewsItem title="MyTitle" ImgURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfW7v1P0xKgsEAkEzsrsLqKXDVMTfgTum0dQ&s" /></div>
                    <div className="col-md-4 my-2"><NewsItem title="MyTitle" ImgURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfW7v1P0xKgsEAkEzsrsLqKXDVMTfgTum0dQ&s" /></div>
                    <div className="col-md-4 my-2"><NewsItem title="MyTitle" ImgURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfW7v1P0xKgsEAkEzsrsLqKXDVMTfgTum0dQ&s" /></div>
                    <div className="col-md-4 my-2"><NewsItem title="MyTitle" ImgURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfW7v1P0xKgsEAkEzsrsLqKXDVMTfgTum0dQ&s" /></div>
                    <div className="col-md-4 my-2"><NewsItem title="MyTitle" ImgURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfW7v1P0xKgsEAkEzsrsLqKXDVMTfgTum0dQ&s" /></div>
                </div>
            </div>
        );
    }
}
