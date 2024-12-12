import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice'; // Ensure proper import of the action

function DeletePizzaItem({ pizzaId }) { // Renamed the component to avoid naming conflicts
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteItem(pizzaId)); // Call the Redux action creator
    };

    return (
        <Button type="small" onClick={handleDelete}>
            Delete
        </Button>
    );
}

export default DeletePizzaItem;
