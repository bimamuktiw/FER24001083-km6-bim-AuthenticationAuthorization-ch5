import Container from '../../component/atoms/Container';
import Button from '../../component/atoms/Button';
import { fetcher, getImageURL } from '../../helper/utils';
import { Icon } from '@iconify/react';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { useEffect, useState } from 'react';
import moment from 'moment';

export default function DetailPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const { data } = await fetcher(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`
      );
      console.log(data);
      setData(data || null);
    }

    getData();
  }, [id]);

  if (data)
    return (
      <div
        className="-mt-[60px] h-screen bg-center bg-cover"
        style={{
          backgroundImage: `url('${getImageURL(data.backdrop_path)}')`,
        }}
      >
        <Container className="flex items-center h-full">
          <div className="max-w-[650px] backdrop-blur-sm py-[40px] px-8 rounded-lg text-white">
            <Button
              className="mb-4 text-white"
              variant="primary-outlined"
              onClick={() => (window.location.href = '/')}
            >
              <Icon icon="tabler:chevron-left" height={25} />
              back to homepage
            </Button>
            <h1 className="text-6xl mb-3">{data.original_title}</h1>
            <p className="mb-2 text-xl italic">{data.tagline}</p>
            <div className="border-b-[2px] border-white w-full max-w-[200px]" />
            <p className="mt-4">{data.overview}</p>

            <div className="flex items-center gap-5 mt-9 flex-wrap">
              <div className="flex items-center gap-2 border border-white rounded-lg px-3 py-2">
                <Icon icon="fluent-emoji-flat:star" height={15} />
                <p className="font-bold">
                  {data.vote_average && Math.trunc(data.vote_average)} / 10
                </p>
              </div>
              <div className="flex items-center gap-2 border border-white rounded-lg px-3 py-2">
                <p>
                  Release {moment(data.release_date).format('MMMM Do YYYY')}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
}
