const Activities = () => {
    const sports = [
        "Football",
        "Volleyball",
        "Badminton",
        "Kabaddi",
        "Kho-Kho",
        "Athletes",
        "Basketball",
        "Throw Ball",
        "Carrom",
        "Chess",
        "Inter Games",
        "Skating",
        "Javelin",
        "All field events and track events",
      ];

    
      return (
        <section>
          <p className="title mb-4">Empowering Champions: Sports Activities</p>
          <div className="row mb-3 mb-sm-5 gap-3 gap-lg-5 gx-0">
            <div className="col-lg-6 ">
              <img src="/Images/Common/Sports/Sports1.jpg" alt="No-Image" className="w-100 sports-img rounded-3"/>
            </div>
            <div className="col-lg-5">
            <p className="mb-2">Discover the vibrant sports culture at Don Bosco School, With a focus on holistic development, we nurture young talents to achieve remarkable success in Zonal, State, and National-level competitions. Explore our commitment to fostering teamwork, discipline, and excellence in sports.</p>
            <p className="text-success mb-1">Our Sports Activities are :</p>
            {sports.map((sport, index) => (
              <span key={index}>{sport} , </span>
            ))}
            <span>etc.</span>
            </div>
            
          </div>
        </section>
      );
    };

export default Activities