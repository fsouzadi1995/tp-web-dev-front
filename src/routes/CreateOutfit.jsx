import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { axios } from '../lib/axios';

function CreateOutfit() {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const values = Object.fromEntries(form);

    axios.post('/outfit', values).then(() => navigate('/history'));
  };

  return (
    <section className='flex justify-center'>
      <form onSubmit={onSubmit}>
        <div className='flex items-center justify-center gap-20'>
          <input
            required
            type='radio'
            name='character'
            value='charactera'
            className='h-10 w-10'
          />
          <label htmlFor='charactera' className='h-36 w-36 flex items-center'>
            A <img src={`./charactera.png`} />
          </label>
          <input
            required
            type='radio'
            name='character'
            value='characterb'
            className='h-10 w-10'
          />
          <label htmlFor='characterb' className='h-36 w-36 flex items-center'>
            B <img src={`./characterb.png`} />
          </label>
          <input
            required
            type='radio'
            name='character'
            value='characterc'
            className='h-10 w-10'
          />
          <label htmlFor='characterc' className='h-36 w-36 flex items-center'>
            C <img src={`./characterc.png`} />
          </label>
          <input
            required
            type='radio'
            name='character'
            value='characterd'
            className='h-10 w-10'
          />
          <label htmlFor='characterd' className='h-36 w-36 flex items-center'>
            C <img src={`./characterd.png`} />
          </label>
        </div>

        <div className='flex items-center justify-center gap-20'>
          <input
            required
            type='radio'
            name='top'
            value='top1'
            className='h-10 w-10'
          />
          <label htmlFor='top1' className='h-36 w-36 flex items-center'>
            1 <img src={`./top1.png`} />
          </label>
          <input
            required
            type='radio'
            name='top'
            value='top2'
            className='h-10 w-10'
          />
          <label htmlFor='top2' className='h-36 w-36 flex items-center'>
            2 <img src={`./top2.png`} />
          </label>
          <input
            required
            type='radio'
            name='top'
            value='top3'
            className='h-10 w-10'
          />
          <label htmlFor='top3' className='h-36 w-36 flex items-center'>
            3 <img src={`./top3.png`} />
          </label>
        </div>

        <div className='flex items-center justify-center gap-20'>
          <input
            required
            type='radio'
            name='bottom'
            value='bottom1'
            className='h-10 w-10'
          />
          <label htmlFor='bottom1' className='h-36 w-36 flex items-center'>
            1 <img src={`./bottom1.png`} />
          </label>
          <input
            required
            type='radio'
            name='bottom'
            value='bottom2'
            className='h-10 w-10'
          />
          <label htmlFor='bottom2' className='h-36 w-36 flex items-center'>
            2 <img src={`./bottom2.png`} />
          </label>
          <input
            required
            type='radio'
            name='bottom'
            value='bottom3'
            className='h-10 w-10'
          />
          <label htmlFor='bottom3' className='h-36 w-36 flex items-center'>
            3 <img src={`./bottom3.png`} />
          </label>
        </div>

        <div className='flex items-center justify-center gap-20'>
          <input
            required
            type='radio'
            name='shoe'
            value='shoe1'
            className='h-10 w-10'
          />
          <label htmlFor='shoe1' className='h-36 w-36 flex items-center'>
            1 <img src={`./shoe1.png`} />
          </label>
          <input
            required
            type='radio'
            name='shoe'
            value='shoe2'
            className='h-10 w-10'
          />
          <label htmlFor='shoe2' className='h-36 w-36 flex items-center'>
            2 <img src={`./shoe2.png`} />
          </label>
          <input
            required
            type='radio'
            name='shoe'
            value='shoe3'
            className='h-10 w-10'
          />
          <label htmlFor='shoe3' className='h-36 w-36 flex items-center'>
            3 <img src={`./shoe3.png`} />
          </label>
        </div>

        <div className='flex justify-center mt-20'>
          <button
            type='submit'
            className='px-4 py-2 bg-blue-800 flex justify-center rounded'
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export { CreateOutfit };
