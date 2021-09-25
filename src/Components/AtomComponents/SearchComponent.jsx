import './style.css'
export default function SearchComponent(){
    return (
        <div className="w-15">
            <form className="form-inline my-2 my-lg-0">
                <input className="w-100 form-control mr-sm-2 border-radius-round text-white header-search-component" type="search" placeholder="Search" aria-label="Search" />
            </form>
        </div>
    );
}