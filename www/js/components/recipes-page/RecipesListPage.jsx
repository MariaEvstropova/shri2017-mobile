import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as recipesActions from '../../actions/recipesActions';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Cake from 'material-ui/svg-icons/social/cake';
import RefreshIndicator from 'material-ui/RefreshIndicator';

import styles from '../../../css/recipes-list/recipe-list.css';

export class RecipesListPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false
        };
    }

    componentWillReceiveProps(newProps) {
        if (newProps.recipeDetails !== this.props.recipeDetails && !!newProps.recipeDetails) {
            this.setState({ isLoading: false });

            this.props.router.push('/recipedetails');
        }
    }

    _handleShowDetails(id , event) {
        event.preventDefault();

        this.setState({ isLoading: true });
        
        this.props.recipesActions.getRecipeById(id);
    }

    render() {
        const styles = {
            cardHeader: {
                backgroundColor: 'rgb(194, 241, 211)'
            },
            titleStyle: {
                fontSize: '16px',
                fontWeight: 'bold',
                paddingBottom: '5px'
            },
            iconStyle: {
                width: '50px',
                height: '50px'
            }
        };

        return (
            <div className='recipeList-wrapper'>
                {this.props.recipes.map((recipe, index) => {
                    return (
                        <div className='recipeList-recipe' key={index} >
                            <Card>
                                <CardHeader
                                    title={recipe.recipeName}
                                    titleStyle={styles.titleStyle}
                                    subtitle={`Recipe rating - ${recipe.rating}`}
                                    avatar={recipe.smallImageUrls.length > 0 ? recipe.smallImageUrls[0] : '../../../img/logo.png'}
                                    iconStyle={styles.iconStyle}
                                    style={styles.cardHeader}
                                />
                                <CardText>
                                    <ul className='recipeList-ingredients'>
                                        {
                                            recipe.ingredients.map((ingredient, ingredientIndex) => {
                                                return (
                                                    <li className='ingredientItem' key={ index + '_' + ingredientIndex }>
                                                        <Cake className='ingredientItem-icon'/>
                                                        <span className='ingredientItem-text'>{ ingredient }</span>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                    <RaisedButton 
                                        label='Details'
                                        onTouchTap={this._handleShowDetails.bind(this, recipe.id)}
                                        primary={true}
                                    />
                                </CardText>
                            </Card>
                        </div>
                    );
                })}
                {
                    this.state.isLoading ? 
                    <div>
                        <RefreshIndicator
                            size={50}
                            left={window.innerWidth / 2 - 25}
                            top={window.innerHeight / 2 - 115}
                            status="loading"
                            style={{ position: 'relative' }}
                        />
                    </div> : null
                }
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        recipes: state.recipes,
        recipeDetails: state.recipeDetails
    };
}

function mapDispatchToProps(dispatch) {
    return {
        recipesActions: bindActionCreators(recipesActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesListPage);