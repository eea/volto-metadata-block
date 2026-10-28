import { getWidget } from './utils';

describe('getWidget', () => {
  it('should return "title" when id is "title"', () => {
    expect(getWidget('title')).toEqual('title');
  });

  it('should return "description" when id is "description"', () => {
    expect(getWidget('description')).toEqual('description');
  });

  it('should return "tags" when id is "subjects"', () => {
    expect(getWidget('subjects')).toEqual('tags');
  });

  it('should return "choices" when field factory is "Choice"', () => {
    const field = { factory: 'Choice' };
    expect(getWidget('', field)).toEqual('choices');
  });

  it('should return "relation" when field factory is "Relation Choice"', () => {
    const field = { factory: 'Relation Choice' };
    expect(getWidget('', field)).toEqual('relation');
  });

  it('should return "relations" when field factory is "Relation List"', () => {
    const field = { factory: 'Relation List' };
    expect(getWidget('', field)).toEqual('relations');
  });

  it('should return "image" when field factory is "Image"', () => {
    const field = { factory: 'Image' };
    expect(getWidget('', field)).toEqual('image');
  });

  it('should return "file" when field factory is "File"', () => {
    const field = { factory: 'File' };
    expect(getWidget('', field)).toEqual('file');
  });

  it('should return field widget when id is not defined in function and field widget exists', () => {
    const field = { widget: 'custom_widget' };
    expect(getWidget('', field)).toEqual('custom_widget');
  });

  it('should return field type when id is not defined in function and field widget does not exist but field type exists', () => {
    const field = { type: 'custom_type' };
    expect(getWidget('', field)).toEqual('custom_type');
  });

  it('should return id when id is not defined in function and neither field widget nor field type exist', () => {
    expect(getWidget('custom_id')).toEqual('custom_id');
  });
});
