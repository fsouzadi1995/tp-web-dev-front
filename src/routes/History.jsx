import * as React from 'react';
import { axios } from '../lib/axios';
import { AuthContext } from '../providers/AuthContext';

async function getOutfits(isAuthed) {
  return Promise.all([
    await axios.get('/outfit/history'),
    isAuthed ? await axios.get(`/outfit/private_history`) : [],
  ]);
}

function History() {
  const { isAuthed } = React.useContext(AuthContext);
  const [outfits, setOutfits] = React.useState([[], []]);
  const [publicOutfits, privateOutfits] = outfits;

  React.useEffect(() => {
    getOutfits(isAuthed).then(setOutfits);
  }, [isAuthed]);

  return (
    <section className='my-20 flex justify-evenly'>
      {publicOutfits.length && (
        <div>
          <h2 className='text-xl'>Public history</h2>

          <ul className='mt-20 flex flex-col gap-y-10 mx-auto list-decimal'>
            {publicOutfits.map((outfit) => (
              <li key={outfit.id}>
                <div className='flex justify-around'>
                  <img
                    src={`./${outfit.character.name}.png`}
                    className='h-16 w-20'
                  />
                  <img src={`./${outfit.top.name}.png`} className='h-16 w-20' />
                  <img
                    src={`./${outfit.bottom.name}.png`}
                    className='h-16 w-20'
                  />
                  <img
                    src={`./${outfit.shoe.name}.png`}
                    className='h-16 w-20'
                  />
                </div>
                <pre className='mt-6 max-w-lg font-mono'>
                  {JSON.stringify(outfit, null, '\t')}
                </pre>
              </li>
            ))}
          </ul>
        </div>
      )}

      {isAuthed && privateOutfits.length ? (
        <div>
          <h2 className='text-xl'>Private history</h2>

          <ul className='mt-20 flex flex-col gap-y-10 justify-center mx-auto list-decimal'>
            {privateOutfits.map((outfit) => (
              <li key={outfit.id}>
                <div className='flex justify-around'>
                  <img
                    src={`./${outfit.character.name}.png`}
                    className='h-16 w-20'
                  />
                  <img src={`./${outfit.top.name}.png`} className='h-16 w-20' />
                  <img
                    src={`./${outfit.bottom.name}.png`}
                    className='h-16 w-20'
                  />
                  <img
                    src={`./${outfit.shoe.name}.png`}
                    className='h-16 w-20'
                  />
                </div>
                <pre className='mt-6 max-w-lg font-mono'>
                  {JSON.stringify(outfit, null, '\t')}
                </pre>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}

export { History };
