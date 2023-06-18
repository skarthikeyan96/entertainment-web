const Collection = (props: any) => {

    const {items} = props;

   return(
    <> 
        {
             items.map((item: any, idx: number) => {
                return (
                  <div
                    key={idx}
                    className="relative w-full cursor-pointer mb-4"
                  >
                    <div className="relative w-full rounded-lg">
                      <div className="">
                        <img
                          className="object-cover"
                          src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="mt-2 mb-1 flex text-[11px] font-light md:text-[13px]">
                        <div className="flex gap-x-4 items-center">
                          <p>
                            {new Date(
                              item.release_date || item.first_air_date
                            ).getFullYear()}
                          </p>
                          <p className="capitalize text-white">
                            {item.media_type}
                          </p>
                        </div>
                      </div>
                      <h2 className="md:heading-xs text-ellips w-[150px] truncate text-sm font-bold capitalize text-app-pure-white sm:w-[180px] md:w-[200px] lg:w-[268px]">
                        {item.title || item.name}
                      </h2>
                    </div>
                  </div>
                );
              })}
        
    </>
   )
}

export default Collection