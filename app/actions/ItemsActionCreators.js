import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import ItemsAPI from '../api/ItemsAPI';

export default {
	fetchItems () {
		AppDispatcher.dispatchAsync(ItemsAPI.fetchItems(), {
			request : constants.FETCH_ITEMS,
			success : constants.FETCH_ITEMS_SUCCESS,
			error   : constants.FETCH_ITEMS_ERROR
		});
	},
	setItems (data) {
		AppDispatcher.dispatch({
			type : constants.SET_ITEMS,
			data
		});
	},
	setPaginationOffset (offset) {
		AppDispatcher.dispatch({
			type : constants.SET_PAGINATION_OFFSET,
			offset
		});
	}
};