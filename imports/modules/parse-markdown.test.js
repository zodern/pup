import parseMarkdown from './parse-markdown';

test('Converts Markdown string to HTML.', () => {
  const markdownToHTML = parseMarkdown('This _should_ be converted **to** HTML.').trim();
  const HTMLResult = '<p>This <em>should</em> be converted <strong>to</strong> HTML.</p>';
  expect(markdownToHTML).toBe(HTMLResult);
});
