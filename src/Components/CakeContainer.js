import React from 'react'
import { buyCake } from './redux/CakeActions'
import { connect } from 'react-redux'
const CakeContainer = (props) => {
    return (
        <div>
            <h2>Cake shop {props.numberofcakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numberofcakes: state.numberofcakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake:() => dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (CakeContainer)