import React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Cake from 'material-ui/svg-icons/social/cake';

export class RecipeDetailsPage extends React.Component {
    render() {
        const recipe = this.props.recipeDetails;
        const rating = Math.round(recipe.rating);

        let starts = [];
        for (let i = 0; i < rating; i++) {
            starts.push(
                <StarBorder color='white' />
            );
        }

        const ingredients = recipe.ingredientLines;
        const style = {
            p: {
                margin: '5px 0',
                fontWeight: 'bold'
            }
        }

        return (
            <div style={{ padding: '69px 5px 5px 5px', overflowY: 'hidden' }}>
                <Card>
                    <CardHeader
                        title={recipe.name}
                        titleStyle={{ textTransform: 'uppercase', fontWeight: 'bold', paddingBottom: '5px' }}
                        subtitle={recipe.attribution.text}
                        subtitleStyle={{ fontSize: '12px' }}
                        avatar={recipe.attribution.logo}
                        textStyle={{ paddingRight: '0', width: 'calc(100% - 56px)' }}
                    />
                    <CardMedia overlay={<div style={{ textAlign: 'center', verticalAlign: 'middle', marginBottom: '5px' }}>{starts}</div>}>
                        <img src={recipe.images.length > 0 ? recipe.images[0]['hostedLargeUrl'] : ''} />
                    </CardMedia>
                    <CardText>
                        <div>
                            <div>
                                <p style={style.p}>{`Total time: ${recipe.totalTime}`}</p>
                                <p style={style.p}>{`Number of servings: ${recipe.numberOfServings}`}</p>
                            </div>
                            <ul style={{ listStyleType: 'none', margin: '20px 0', padding: '0' }}>
                                {
                                    ingredients.map((ingredient, index) => {
                                        return (
                                            <li className='ingredientItem' key={index}>
                                                <Cake className='ingredientItem-icon'/>
                                                <span className='ingredientItem-text'>{ ingredient }</span>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                            <div>
                                <p style={{ fontSize: '12px', color: 'rgba(0, 0, 0, 0.54)', margin: '5px 0' }}>{`Source: ${recipe.source.sourceDisplayName}`}</p>
                                <a style={{ fontSize: '12px' }} href={recipe.source.sourceRecipeUrl}>{recipe.source.sourceSiteUrl}</a>
                            </div>
                        </div>
                    </CardText>
                </Card>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        recipeDetails: state.recipeDetails
    };
}

export default connect(mapStateToProps)(RecipeDetailsPage);