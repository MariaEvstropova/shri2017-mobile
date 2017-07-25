import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as recipesActions from '../../actions/recipesActions';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Cake from 'material-ui/svg-icons/social/cake';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import styled from 'styled-components';

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
            <StyledWrapper>
                {this.props.recipes.map((recipe, index) => {
                    return (
                        <StyledRecipe key={index} >
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
                                    <StyledList>
                                        {
                                            recipe.ingredients.map((ingredient, ingredientIndex) => {
                                                return (
                                                    <li key={ index + '_' + ingredientIndex }>
                                                        <StyledCake/>
                                                        <StyledIconText>{ ingredient }</StyledIconText>
                                                    </li>
                                                );
                                            })
                                        }
                                    </StyledList>
                                    <RaisedButton 
                                        label='Details'
                                        onTouchTap={this._handleShowDetails.bind(this, recipe.id)}
                                        primary={true}
                                    />
                                </CardText>
                            </Card>
                        </StyledRecipe>
                    );
                })}
                {
                    this.state.isLoading ? 
                    <div>
                        <RefreshIndicator
                            size={50}
                            left={window.innerWidth / 2 - 25}
                            top={window.innerHeight / 2}
                            status="loading"
                        />
                    </div> : null
                }
            </StyledWrapper>
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

const StyledWrapper = styled.div`
    padding-top: 64px;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
`;

const StyledRecipe = styled.div`
    margin: 5px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
`;

const StyledIconText = styled.span`
    display: inline-block;
    margin-top: 6px;
    margin-left: 30px;
`;

const StyledCake = styled(Cake)`
    position: absolute;
    color: rgba(0, 0, 0, .3) !important;
`;

const StyledList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    margin-bottom: 10px;
    line-height: 1.5;
`;

const StyledRefresh = styled(RefreshIndicator)`
    position: relative;
`;