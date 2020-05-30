import React, { Component } from 'react';

/**
 * See the component below? there are 4 fields: name, restaurant, meal and desert.
 * Once the user changes the form, it should be reflected on the "Your reservation" paragraph.
 */

class FoodPicker extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			restaurant: '',
			meal: '',
			desert: 'not'
		}
		
	}

	nameHandler (e) {
		this.setState({
			name: e.target.value
		})
	}

	restaurantHandler (e) {
		this.setState({
			restaurant: e.target.value
		})
	}

	mealHandler (e) {
		this.setState({
			meal: e.target.value
		})
	}

	desertHandler (e) {
		if	(e.target.checked) {
			this.setState({
				desert: ''
			})
		} else {
			this.setState({
				desert: 'not'
			})
		}
	}
	
	render() {
		return (
			<div>
				<h1>Order special meal:</h1>
				<div>
					Your name:
					<input type="text" onChange={this.nameHandler.bind(this)} value={this.state.name}/>
				</div>
				<div>
					Choose restaurant:
					<select onChange={this.restaurantHandler.bind(this)} value={this.state.restaurant} >
						<option value="Frangelico">Frangelico</option>
						<option value="Mina Tomei">Mina Tomei</option>
						<option value="Rak Basar">Rak Basar</option>
						<option value="Texas BBQ">Texas BBQ</option>
					</select>
				</div>
				<div>
					Favorite meal:
					<input type="text"  onChange={this.mealHandler.bind(this)} value={this.state.meal}/>
				</div>
				<div>
					Want a desert?
					<input type="checkbox" onClick={this.desertHandler.bind(this)} value={this.state.desert} />
				</div>

				<div>
					<h2>Your reservation:</h2>
					Hi {this.state.name}! <br />
					We are glad you want to reserve a table at {this.state.restaurant}.<br />
					We will make sure that your favorite meal, {this.state.meal} is available.<br />
					Additionally, our chef will {this.state.desert} make a special desert for you! <br />
				</div>
			</div>
		);
	}
}

export default FoodPicker;