import {connect} from "react-redux";
import {getCats} from "../../../redux/reducers/cats-reducer";
import {useEffect} from "react";
import {
    getAllCatsSelector,
} from "../../../redux/selectors/cats-selector";
import All from "./All";

function throttle(callee, timeout) {
    let timer = null

    return function perform(...args) {
        if (timer) return

        timer = setTimeout(() => {
            callee(...args)

            clearTimeout(timer)
            timer = null
        }, timeout)
    }
}

const AllContainer = (props) => {
    const checkPosition = () => {
        const height = document.body.offsetHeight
        const screenHeight = window.innerHeight
        const scrolled = window.scrollY
        const threshold = height - screenHeight / 10
        const position = scrolled + screenHeight

        if (position >= threshold) {
            props.getCats();
        }
    }

    useEffect(() => {
        if (!props.cats.length) {
            props.getCats();
        }

        window.addEventListener("scroll", throttle(checkPosition, 500));

        return () => {
            window.removeEventListener("scroll", throttle(checkPosition, 500));
        }
    }, [])

    return <All cats={props.cats}/>
}

const mapStateToProps = (state) => ({
    cats: getAllCatsSelector(state),
})

export default connect(mapStateToProps, {
    getCats
})(AllContainer);
