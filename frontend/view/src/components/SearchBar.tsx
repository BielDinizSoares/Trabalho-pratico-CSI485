import styles from './SearchBar.module.css';

export function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Search..." />
      <button>Search</button>
    </div>
  );
}
