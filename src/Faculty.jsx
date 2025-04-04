export default function Faculty()
{
   return(
    <section className="about m-3 bg-white/20 p-3 rounded-xl text-rose-50 ">
        <h2 className="text-center text-xl mb-1">Meet Our Teachers</h2>
        <div className="flex ">
        <div className="chandan w-1/2">
            <img src="" alt="" />
            <p className="text-sm"><strong>Chandan Kumar</strong> <br />(B.Sc, B.Pharm) <br /> 3 Years Experience</p>


        </div>
        {/* 2nd teacher--------------- */}
        <div className="alam w-1/2 ml-auto ">
            <img src="" alt="" />
            <p className="text-sm"><strong>M.M Alam</strong><br /> (B.Sc, M.A, B.Ed) <br />7 Years Experience</p>

        </div>
       </div>
    </section>
   );
}