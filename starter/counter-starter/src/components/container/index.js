import PropTypes from 'prop-types'

const Container = (props) => {
    return (
        <section className='container'>
            {props.children}
        </section>
    )
}

Container.propTypes = {
    children: PropTypes.node
}

export default Container;