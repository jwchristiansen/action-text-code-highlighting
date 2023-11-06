module ApplicationHelper
  def language_formatter(content)
    doc = Nokogiri::HTML.fragment(content.to_s)
    doc.css("pre").each do |pre|
      language = pre.content.split.first
      if language
        pre.content = pre.content.sub(language, "")
        pre["class"] = "hljs language-#{language}"
      end
    end
    doc.to_html
  end
end
