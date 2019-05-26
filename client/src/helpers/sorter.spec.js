import {filesSorter} from './sorter';

describe('sort files', () => {
  it('group array', () => {
    const testArray = [
      {
        name: 'F4_00127.pdf',
        size: 10,
        type: 'FILE'
      },
      {
        name: 'f.txt',
        size: 10,
        type: 'FILE'
      },
      {
        name: 'F1.txt',
        size: 10,
        type: 'FILE'
      },
      {
        name: 'X-files',
        size: 20,
        type: 'DIR'
      },
      {
        name: 'f4_99.jpg',
        size: 10,
        type: 'FILE'
      },
      {
        name: 'innerTemp',
        size: 20,
        type: 'DIR'
      },
      {
        name: 'f0008.doc',
        size: 10,
        type: 'FILE'
      },
      {
        name: 'function.ccp',
        size: 10,
        type: 'FILE'
      }
    ];
    const expectedArray = [
      {
        name: 'innerTemp',
        size: 20,
        type: 'DIR'
      },
      {
        name: 'X-files',
        size: 20,
        type: 'DIR'
      },
      {
        name: 'f.txt',
        size: 10,
        type: 'FILE'
      },
      {
        name: 'F1.txt',
        size: 10,
        type: 'FILE'
      },
      {
        name: 'f4_99.jpg',
        size: 10,
        type: 'FILE'
      },
      {
        name: 'F4_00127.pdf',
        size: 10,
        type: 'FILE'
      },
      {
        name: 'f0008.doc',
        size: 10,
        type: 'FILE'
      },
      {
        name: 'function.ccp',
        size: 10,
        type: 'FILE'
      }
    ];

    expect(filesSorter(testArray)).toEqual(expectedArray)
  });
});
