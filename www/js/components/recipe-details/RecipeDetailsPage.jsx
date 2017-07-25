import React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Cake from 'material-ui/svg-icons/social/cake';
import Share from 'material-ui/svg-icons/social/share.js';
import styled from 'styled-components';

export class RecipeDetailsPage extends React.Component {
    constructor(props) {
        super(props);

        this._handleShareRecipe = this._handleShareRecipe.bind(this);
        this._handleShareSuccess = this._handleShareSuccess.bind(this);
        this._handleShareError = this._handleShareError.bind(this);
    }

    _handleShareSuccess() {
        navigator.notification.alert(
            ' Share completed (ᵔᴥᵔ) ',
            null,
            ' Urah! '
        );
    }

    _handleShareError(error) {
        navigator.notification.alert(
            ' Something went wrong ≧☉_☉≦ ',
            null,
            ' ouch! '
        );
    }

    _handleShareRecipe(event) {
        event.preventDefault();

        const recipe = this.props.recipeDetails;

        window.plugins.socialsharing.share(
            `Found great recipe: ${recipe.name}`,
            `Found new recipe with FEEDME`,
            null,
            recipe.source.sourceRecipeUrl || null,
            this._handleShareSuccess,
            this._handleShareError
        );
    }

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

        const cardTitle = <StyledCardTitle>
            {recipe.name}
            <StyledIconButton
                onTouchTap={this._handleShareRecipe}
            >
                <StyledShare />
            </StyledIconButton>
        </StyledCardTitle>;

        return (
            <StyledWrapper>
                <Card>
                    <CardHeader
                        title={cardTitle}
                        subtitle={recipe.attribution.text}
                        subtitleStyle={{ fontSize: '12px' }}
                        avatar={recipe.attribution.logo}
                        textStyle={{ paddingRight: '0', width: 'calc(100% - 56px)' }}
                    />
                    <CardMedia overlay={<StarsSection>{starts}</StarsSection>}>
                        <img src={recipe.images.length > 0 ? recipe.images[0]['hostedLargeUrl'] : ''} />
                    </CardMedia>
                    <CardText>
                        <div>
                            <div>
                                <StyledP>{`Total time: ${recipe.totalTime}`}</StyledP>
                                <StyledP>{`Number of servings: ${recipe.numberOfServings}`}</StyledP>
                            </div>
                            <StyledList>
                                {
                                    ingredients.map((ingredient, index) => {
                                        return (
                                            <li key={index}>
                                                <Cake />
                                                <span>{ ingredient }</span>
                                            </li>
                                        );
                                    })
                                }
                            </StyledList>
                            <div>
                                <RecipeSource>{`Source: ${recipe.source.sourceDisplayName}`}</RecipeSource>
                                <RecipeUrl href={recipe.source.sourceRecipeUrl}>{recipe.source.sourceSiteUrl}</RecipeUrl>
                            </div>
                        </div>
                    </CardText>
                </Card>
            </StyledWrapper>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        recipeDetails: state.recipeDetails
    };
}

export default connect(mapStateToProps)(RecipeDetailsPage);

const StyledWrapper = styled.div`
    padding: 69px 5px 5px 5px;
    overflow-y: hidden;
`;

const StyledCardTitle = styled.p`
    width: 100%;
    box-sizing: border-box;
    text-transform: uppercase;
    font-weight: bold;
    padding-bottom: 5px; 
    position: relative;
    padding-right: 24px;
    margin: 0;
`;

const StyledIconButton = styled(IconButton)`
    position: absolute !important;
    top: 0;
    right: 0;
    margin: 0 !important;
    padding: 0 !important;
    width: 24px !important;
    height: 24px !important;
`;

const StyledShare = styled(Share)`
    color: rgba(0,0,0,.5) !important;
`;

const StarsSection = styled.div`
    text-align: center;
    vertical-align: middle;
    margin-bottom: 5px;
`;

const StyledP = styled.p`
    margin: 5px 0;
    font-weight: bold;
`;

const StyledList = styled.ul`
    list-style-type: none;
    margin: 20px 0;
    padding: 0;
`;

const RecipeSource = styled.p`
    font-size: 12px;
    color: rgba(0, 0, 0, 0.54);
    margin: 5px 0;
`;

const RecipeUrl = styled.a`
    font-size: 12px;
`;