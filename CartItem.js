import React from 'react';
import App from './App';
import './index.css';


class CartItem extends React.Component{
    constructor () {
        super();
        this.state = {
            price:999,
            title:'mobile Phone',
            qty:1,
            img:''
        }
        //this.increaseQuantity=this.increaseQuantity.bind(this);

    }
    increaseQuantity = () => {
        //this.state.qty+=1;
        //console.log('this',this.state);
        //setState form 1
        // this.setState({
        //     qty: this.state.qty + 1
        // });
        //setState form 2
        this.setState((prevState) => {
            return {
                qty: prevState.qty +1
            }
        });
    }
    decreaseQuantity = () => {
        this.setState({
            qty: this.state.qty -1

        });
    }
    render () {
        const {price,title,qty} =this.state;
        return (
            <div className="cart-item">
                
                <div className="Left-block">
                    <img style={styles.image} />
                </div>
                <div classname="right-block">
                    <div style={ { fontSize: 25 } }>{title}</div>
                    <div style={ { color:'#777'}}>Rs {price}</div>
                    <div style={ { color:'#777'}}>Qty : {qty}</div>
                    <div className="cart-item-actions">
                        <img 
                        alt="increase"
                         className="action-icons"
                          src="https://as2.ftcdn.net/jpg/01/07/62/07/500_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg" 
                          onClick={this.increaseQuantity}/>
                        <img alt="decrease"
                         className="action-icons"
                          src="https://as1.ftcdn.net/jpg/03/73/49/86/500_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
                          onClick={this.decreaseQuantity} />
                        <img alt="delete"
                         className="action-icons"
                          src="https://as2.ftcdn.net/jpg/00/98/26/11/500_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg" />
                    </div>
                </div>
            
            </div>

        );
    }
}

const styles={
    image :{
    height:110,
    width:110,
    borderRadius:4,
    background:'#ccc'
}
}
export default CartItem;
