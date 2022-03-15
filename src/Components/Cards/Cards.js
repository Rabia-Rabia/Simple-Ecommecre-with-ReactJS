import React, { Component } from 'react';
import styles from "./Cards.module.css";

class Cards extends Component {
    state = {
        products: []
    }
    componentDidMount() {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => this.setState({products: data}))
    }
    render() {
        console.log(this.state.products);
        return (
            <div className={styles.row}>
                {this.state.products.map(product => {
                    return(
                       
                        <div key={product.id} className={styles.card}>
                            <div className={styles.cardHeader}>
                                    <img src={product.image} alt="" />
                            </div>
                            <div className={styles.cardBody}>
                                <h2>{product.category}</h2>
                                <p>{product.title}</p>
                                <div className={styles.price}>
                                    <p>${product.price}</p>
                                    <button>Add to Cart</button>
                                </div>
                            </div>

                            
                                
                            
                        </div>
                    )
                })}


               
{/* 
                    <div class={styles.row}>
                        <div class={styles.card}>
                            <div class={styles.cardHeader}>
                                <h1>React</h1>
                            </div>
                            <div class={styles.cardBody}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi neque molestiae eius explicabo mollitia tempore reiciendis, vel, sequi.
                                </p>
                                <a href="https://google.com">Read more</a>
                            </div>
                        </div>
                        <div class={styles.card}>
                            <div class={styles.cardHeader}>
                                <h1>React</h1>
                            </div>
                            <div class={styles.cardBody}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi neque molestiae eius explicabo mollitia tempore reiciendis, vel, sequi.
                                </p>
                                <a href="https://google.com">Read more</a>
                            </div>
                        </div>
                        <div class={styles.card}>
                            <div class={styles.cardHeader}>
                                <h1>React</h1>
                            </div>
                            <div class={styles.cardBody}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi neque molestiae eius explicabo mollitia tempore reiciendis, vel, sequi.
                                </p>
                                <a href="https://google.com">Read more</a>
                            </div>
                        </div>



                    </div> */}
            </div>
               
               
                
        );
    }
}

export default Cards;