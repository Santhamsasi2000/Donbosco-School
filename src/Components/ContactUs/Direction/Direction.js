import './Direction.css';

const Direction = () => {
  return (
    <>
      <p className="title fw-bold fs-4 mt-5">DIRECTIONS</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.0276645079316!2d78.68583437322656!3d9.848043375634695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0057b253db1cd9%3A0x8a367d183f179eb4!2sDon%20Bosco%20Higher%20Secondary%20School%20Pallithammam!5e0!3m2!1sen!2sin!4v1735909328620!5m2!1sen!2sin" className='w-100 direction border border-success border-2 rounded-3' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </>
  )
}

export default Direction
