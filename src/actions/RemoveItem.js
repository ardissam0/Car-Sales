//created action creator and action to remove the added items
//passed into AddedFeature/AddedFeatures

export const removeItem = item => {
    return {
        type: 'REMOVE_ITEM',
        payload: item
    }
}
