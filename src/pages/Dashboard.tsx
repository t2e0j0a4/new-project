import { IconType } from "react-icons";
import styles from "./Dashboard.module.css";

// React Icons
import { MdPrint, MdOutlineMoreHoriz } from "react-icons/md";
import { IoToggle, IoSearch, IoAddCircle } from "react-icons/io5";

// Data
import { products } from "../data";

const Dashboard = () => {

  return (
    <main className={styles.dashboard}>
      <div className={styles.dashboard__center}>
        
        {/* Section 1 - Search & Options */}

        <section className={styles.dashboard__head}>
          <div className={styles.dashboard__search}>
            <SearchBox name="articleSearch" placeholder="Search Article No" />
            <SearchBox name="productSearch" placeholder="Search Product..." />
          </div>
          <div className={styles.dashboard__options}>
            <Option name="New Product" Icon={IoAddCircle} color="#1cf6bc"/>
            <Option name="Print List" Icon={MdPrint} color="#20e8e5"/>
            <Option name="Advanced Mode" Icon={IoToggle} color="#16dbf5"/>
          </div>
        </section>

        {/* Section 1 - Search & Options */}

        {/* Section 2 - Products List */}

        <section className={styles.dashboard__main}>
          <table className={styles.products__table}>
            <thead className={styles.table__head}>
              <tr>
                <th>Article No.</th>
                <th>Product/Service</th>
                <th>In Price</th>
                <th>Price</th>
                <th>Unit</th>
                <th>In Stock</th>
                <th>Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody className={styles.table__body}>
              {
                products.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td><input className={styles.input1} type="text" name="articleNo" defaultValue={item.articleNo} /></td>
                      <td><input className={styles.input2} type="text" name="productName" defaultValue={item.productName} /></td>
                      <td><input className={styles.input3} type="text" name="inPrice" defaultValue={item.inPrice} /></td>
                      <td><input className={styles.input4} type="text" name="price" defaultValue={item.price} /></td>
                      <td><input className={styles.input5} type="text" name="unit" defaultValue={item.unit} /></td>
                      <td><input className={styles.input6} type="text" name="stock" defaultValue={item.inStock} /></td>
                      <td><input className={styles.input7} type="text" name="description" defaultValue={item.description} /></td>
                      <td><button type="button"><MdOutlineMoreHoriz fontSize={20} color="#3697a4"/></button></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </section>

        {/* Section 2 - Products List */}

      </div>
    </main>
  )
}

export default Dashboard;

export const SearchBox = ({name, placeholder}: {name: string, placeholder: string}) => {
  return (
    <form className={styles.search__box}>
      <input type="text" placeholder={placeholder} aria-label={placeholder} name={name} />
      <button type="button" title="Search" aria-labelledby="Search"><IoSearch/></button>
    </form>
  )
}

export const Option = ({name, Icon, color}: {name: string, Icon: IconType, color: string}) => {
  return (
    <button type="button" title={name}>
      <span>{name}</span>
      <Icon fontSize={20} color={color}/>
    </button>
  )
}