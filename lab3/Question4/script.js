import { get_items, add_item, update_item_title_by_id, delete_item_by_id, get_item_title_by_id } from './data.js';

add_item({ id: 1, title: 'Book 1' });
add_item({ id: 2, title: 'Book 2' });

console.log(get_items()); 

update_item_title_by_id(1, 'Updated Book 1');
console.log(get_items()); 

console.log(get_item_title_by_id(1));

delete_item_by_id(2);
console.log(get_items()); 

console.log(get_item_title_by_id(2)); 
