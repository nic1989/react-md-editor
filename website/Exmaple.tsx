import React, { Fragment } from 'react';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import MDEditor, { MDEditorProps } from '../';

const Exmaple = (props = {} as { mdStr: string }) => {
  const [state, setVisiable] = React.useState<MDEditorProps>({
    visiableDragbar: true,
    hideToolbar: true,
    highlightEnable: true,
    enableScroll: true,
    value: props.mdStr || '',
  });
  return (
    <Fragment>
      <MDEditor
        autoFocus
        value={state.value}
        previewOptions={{
          linkTarget: '_blank',
          rehypePlugins: [
            [
              rehypeSanitize,
              {
                ...defaultSchema,
                attributes: {
                  ...defaultSchema.attributes,
                  span: [
                    // @ts-ignore
                    ...(defaultSchema.attributes.span || []),
                    // List of all allowed tokens:
                    ['className'],
                  ],
                  code: [['className']],
                },
              },
            ],
          ],
        }}
        height={400}
        highlightEnable={state.highlightEnable}
        hideToolbar={!state.hideToolbar}
        enableScroll={state.enableScroll}
        visiableDragbar={state.visiableDragbar}
        textareaProps={{
          placeholder: 'Please enter Markdown text',
        }}
        preview={state.preview}
        onChange={(newValue = '') => {
          setVisiable({ ...state, value: newValue });
        }}
      />
    </Fragment>
  );
};

export default Exmaple;
