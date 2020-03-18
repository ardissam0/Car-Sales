//created action creator and action to add/buy the item
//passed into additionalFeature/additionalFeatures
export const addItem = item => {
    return {
        type: 'ADD_ITEM',
        payload: item
    }
}
