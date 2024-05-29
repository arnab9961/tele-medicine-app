function Slider() {
    return (
      <div className="flex justify-center items-center h-2/5"> {/* Adjusted height */}
        <div className="carousel rounded-box">
          <div className="carousel-item">
            <img className="w-full h-96 object-cover" src="https://us.123rf.com/450wm/sylverarts/sylverarts2304/sylverarts230400020/201536076-big-composition-set-of-medicines-vector-flat-illustration-isolated-pharmacy-drugs-apothecary-bottles.jpg?ver=6" alt="Medicine" />
          </div> 
          <div className="carousel-item">
            <img className="w-full h-96 object-cover" src="https://t3.ftcdn.net/jpg/05/87/98/12/360_F_587981237_PIg0lYpNjTNvVLTWKviHYv3UZj9TbqZk.jpg" alt="Medicine" />
          </div> 
          <div className="carousel-item">
            <img className="w-full h-96 object-cover" src="https://img.freepik.com/premium-vector/vector-doctor-is-calling-illustration_70191-187.jpg" alt="Doctor Illustration" />
          </div> 
        </div>
      </div>
    );
  }
  
  export default Slider;
  