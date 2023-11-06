import { Controller } from "@hotwired/stimulus"
import hljs from 'highlight.js/lib/core';
import plaintext from 'highlight.js/lib/languages/plaintext';
import javascript from 'highlight.js/lib/languages/javascript';
import erb from 'highlight.js/lib/languages/erb';
import ruby from 'highlight.js/lib/languages/ruby';
import xml from 'highlight.js/lib/languages/xml';

// Connects to data-controller="highlight"
export default class extends Controller {
  connect() {
    hljs.registerLanguage('plaintext', plaintext);
    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('erb', erb);
    hljs.registerLanguage('ruby', ruby);
    hljs.registerLanguage('xml', xml);

    this.element.querySelectorAll('pre').forEach((element) => {
      hljs.highlightElement(element);
    });
  }
}
