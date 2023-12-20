const e=Object.freeze({name:"csharp",scopeName:"source.cs",fileTypes:["cs"],uuid:"f7de61e2-bdde-4e2a-a139-8221b179584e",patterns:[{include:"#preprocessor"},{include:"#comment"},{include:"#directives"},{include:"#declarations"},{include:"#script-top-level"}],repository:{directives:{patterns:[{include:"#extern-alias-directive"},{include:"#using-directive"},{include:"#attribute-section"},{include:"#punctuation-semicolon"}]},declarations:{patterns:[{include:"#namespace-declaration"},{include:"#type-declarations"},{include:"#punctuation-semicolon"}]},"script-top-level":{patterns:[{include:"#statement"},{include:"#method-declaration"},{include:"#punctuation-semicolon"}]},"type-declarations":{patterns:[{include:"#preprocessor"},{include:"#comment"},{include:"#storage-modifier"},{include:"#class-declaration"},{include:"#delegate-declaration"},{include:"#enum-declaration"},{include:"#interface-declaration"},{include:"#struct-declaration"},{include:"#record-declaration"},{include:"#attribute-section"},{include:"#punctuation-semicolon"}]},"class-or-struct-members":{patterns:[{include:"#preprocessor"},{include:"#comment"},{include:"#storage-modifier"},{include:"#type-declarations"},{include:"#property-declaration"},{include:"#field-declaration"},{include:"#event-declaration"},{include:"#indexer-declaration"},{include:"#variable-initializer"},{include:"#constructor-declaration"},{include:"#destructor-declaration"},{include:"#operator-declaration"},{include:"#conversion-operator-declaration"},{include:"#method-declaration"},{include:"#attribute-section"},{include:"#punctuation-semicolon"}]},"interface-members":{patterns:[{include:"#preprocessor"},{include:"#comment"},{include:"#property-declaration"},{include:"#event-declaration"},{include:"#indexer-declaration"},{include:"#method-declaration"},{include:"#attribute-section"},{include:"#punctuation-semicolon"}]},statement:{patterns:[{include:"#preprocessor"},{include:"#comment"},{include:"#while-statement"},{include:"#do-statement"},{include:"#for-statement"},{include:"#foreach-statement"},{include:"#if-statement"},{include:"#else-part"},{include:"#goto-statement"},{include:"#return-statement"},{include:"#break-or-continue-statement"},{include:"#throw-statement"},{include:"#yield-statement"},{include:"#await-statement"},{include:"#try-statement"},{include:"#expression-operator-expression"},{include:"#context-control-statement"},{include:"#context-control-paren-statement"},{include:"#labeled-statement"},{include:"#object-creation-expression"},{include:"#array-creation-expression"},{include:"#anonymous-object-creation-expression"},{include:"#local-declaration"},{include:"#block"},{include:"#expression"},{include:"#punctuation-semicolon"}]},expression:{patterns:[{include:"#preprocessor"},{include:"#comment"},{include:"#expression-operator-expression"},{include:"#type-operator-expression"},{include:"#default-literal-expression"},{include:"#throw-expression"},{include:"#raw-interpolated-string"},{include:"#interpolated-string"},{include:"#verbatim-interpolated-string"},{include:"#type-builtin"},{include:"#language-variable"},{include:"#switch-statement-or-expression"},{include:"#with-expression"},{include:"#conditional-operator"},{include:"#assignment-expression"},{include:"#expression-operators"},{include:"#await-expression"},{include:"#query-expression"},{include:"#as-expression"},{include:"#is-expression"},{include:"#anonymous-method-expression"},{include:"#object-creation-expression"},{include:"#array-creation-expression"},{include:"#anonymous-object-creation-expression"},{include:"#invocation-expression"},{include:"#member-access-expression"},{include:"#element-access-expression"},{include:"#cast-expression"},{include:"#literal"},{include:"#parenthesized-expression"},{include:"#tuple-deconstruction-assignment"},{include:"#initializer-expression"},{include:"#identifier"}]},"extern-alias-directive":{begin:"\\b(extern)\\s+(alias)\\b",beginCaptures:{1:{name:"keyword.other.directive.extern.cs"},2:{name:"keyword.other.directive.alias.cs"}},end:"(?=;)",patterns:[{match:"\\@?[_[:alpha:]][_[:alnum:]]*",name:"variable.other.alias.cs"}]},"using-directive":{patterns:[{begin:"\\b(?:(global)\\s+)?(using)\\s+(static)\\b\\s*(?:(unsafe)\\b\\s*)?",beginCaptures:{1:{name:"keyword.other.directive.global.cs"},2:{name:"keyword.other.directive.using.cs"},3:{name:"keyword.other.directive.static.cs"},4:{name:"storage.modifier.unsafe.cs"}},end:"(?=;)",patterns:[{include:"#type"}]},{begin:"\\b(?:(global)\\s+)?(using)\\b\\s*(?:(unsafe)\\b\\s*)?(@?[_[:alpha:]][_[:alnum:]]*)\\s*(=)",beginCaptures:{1:{name:"keyword.other.directive.global.cs"},2:{name:"keyword.other.directive.using.cs"},3:{name:"storage.modifier.unsafe.cs"},4:{name:"entity.name.type.alias.cs"},5:{name:"keyword.operator.assignment.cs"}},end:"(?=;)",patterns:[{include:"#comment"},{include:"#type"}]},{begin:"\\b(?:(global)\\s+)?(using)\\b\\s*+(?!\\(|var\\b)",beginCaptures:{1:{name:"keyword.other.directive.global.cs"},2:{name:"keyword.other.directive.using.cs"}},end:"(?=;)",patterns:[{include:"#comment"},{name:"entity.name.type.namespace.cs",match:"\\@?[_[:alpha:]][_[:alnum:]]*"},{include:"#punctuation-accessor"},{include:"#operator-assignment"}]}]},"attribute-section":{begin:"(\\[)(assembly|module|field|event|method|param|property|return|type)?(\\:)?",beginCaptures:{1:{name:"punctuation.squarebracket.open.cs"},2:{name:"keyword.other.attribute-specifier.cs"},3:{name:"punctuation.separator.colon.cs"}},end:"(\\])",endCaptures:{1:{name:"punctuation.squarebracket.close.cs"}},patterns:[{include:"#comment"},{include:"#attribute"},{include:"#punctuation-comma"}]},attribute:{patterns:[{include:"#type-name"},{include:"#attribute-arguments"}]},"attribute-arguments":{begin:"(\\()",beginCaptures:{1:{name:"punctuation.parenthesis.open.cs"}},end:"(\\))",endCaptures:{1:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#attribute-named-argument"},{include:"#expression"},{include:"#punctuation-comma"}]},"attribute-named-argument":{begin:"(@?[_[:alpha:]][_[:alnum:]]*)\\s*(?==)",beginCaptures:{1:{name:"entity.name.variable.property.cs"}},end:"(?=(,|\\)))",patterns:[{include:"#operator-assignment"},{include:"#expression"}]},"namespace-declaration":{begin:"\\b(namespace)\\s+",beginCaptures:{1:{name:"storage.type.namespace.cs"}},end:"(?<=\\})|(?=;)",patterns:[{include:"#comment"},{name:"entity.name.type.namespace.cs",match:"@?[_[:alpha:]][_[:alnum:]]*"},{include:"#punctuation-accessor"},{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.cs"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.cs"}},patterns:[{include:"#declarations"},{include:"#using-directive"},{include:"#punctuation-semicolon"}]}]},"storage-modifier":{name:"storage.modifier.$1.cs",match:"(?<!\\.)\\b(new|public|protected|internal|private|abstract|virtual|override|sealed|static|partial|readonly|volatile|const|extern|async|unsafe|ref|required|file)\\b"},"class-declaration":{begin:"(?=(\\brecord\\b\\s+)?\\bclass\\b)",end:"(?<=\\})|(?=;)",patterns:[{begin:`(?x)
(\\b(record)\\b\\s+)?
\\b(class)\\b\\s+
(@?[_[:alpha:]][_[:alnum:]]*)\\s*`,beginCaptures:{2:{name:"storage.type.record.cs"},3:{name:"storage.type.class.cs"},4:{name:"entity.name.type.class.cs"}},end:"(?=\\{)|(?=;)",patterns:[{include:"#comment"},{include:"#type-parameter-list"},{include:"#parenthesized-parameter-list"},{include:"#base-types"},{include:"#generic-constraints"}]},{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.cs"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.cs"}},patterns:[{include:"#class-or-struct-members"}]},{include:"#preprocessor"},{include:"#comment"}]},"delegate-declaration":{begin:`(?x)
(?:\\b(delegate)\\b)\\s+
(?<type_name>
  (?:
    (?:ref\\s+(?:readonly\\s+)?)?   # ref return
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s* # array suffix?
      \\[
        (?:\\s*,\\s*)* # commata for multi-dimensional arrays
      \\]
      \\s*
      (?:\\?)? # arrays can be nullable reference types
      \\s*
    )*
  )
)\\s+
(\\g<identifier>)\\s*
(<([^<>]+)>)?\\s*
(?=\\()`,beginCaptures:{1:{name:"storage.type.delegate.cs"},2:{patterns:[{include:"#type"}]},7:{name:"entity.name.type.delegate.cs"},8:{patterns:[{include:"#type-parameter-list"}]}},end:"(?=;)",patterns:[{include:"#comment"},{include:"#parenthesized-parameter-list"},{include:"#generic-constraints"}]},"enum-declaration":{begin:"(?=\\benum\\b)",end:"(?<=\\})",patterns:[{begin:"(?=enum)",end:"(?=\\{)",patterns:[{include:"#comment"},{match:"(enum)\\s+(@?[_[:alpha:]][_[:alnum:]]*)",captures:{1:{name:"storage.type.enum.cs"},2:{name:"entity.name.type.enum.cs"}}},{begin:":",beginCaptures:{0:{name:"punctuation.separator.colon.cs"}},end:"(?=\\{)",patterns:[{include:"#type"}]}]},{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.cs"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.cs"}},patterns:[{include:"#preprocessor"},{include:"#comment"},{include:"#attribute-section"},{include:"#punctuation-comma"},{begin:"@?[_[:alpha:]][_[:alnum:]]*",beginCaptures:{0:{name:"entity.name.variable.enum-member.cs"}},end:"(?=(,|\\}))",patterns:[{include:"#comment"},{include:"#variable-initializer"}]}]},{include:"#preprocessor"},{include:"#comment"}]},"interface-declaration":{begin:"(?=\\binterface\\b)",end:"(?<=\\})",patterns:[{begin:`(?x)
(interface)\\b\\s+
(@?[_[:alpha:]][_[:alnum:]]*)`,beginCaptures:{1:{name:"storage.type.interface.cs"},2:{name:"entity.name.type.interface.cs"}},end:"(?=\\{)",patterns:[{include:"#comment"},{include:"#type-parameter-list"},{include:"#base-types"},{include:"#generic-constraints"}]},{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.cs"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.cs"}},patterns:[{include:"#interface-members"}]},{include:"#preprocessor"},{include:"#comment"}]},"record-declaration":{begin:"(?=\\brecord\\b)",end:"(?<=\\})|(?=;)",patterns:[{begin:`(?x)
(record)\\b\\s+
(@?[_[:alpha:]][_[:alnum:]]*)`,beginCaptures:{1:{name:"storage.type.record.cs"},2:{name:"entity.name.type.class.cs"}},end:"(?=\\{)|(?=;)",patterns:[{include:"#comment"},{include:"#type-parameter-list"},{include:"#parenthesized-parameter-list"},{include:"#base-types"},{include:"#generic-constraints"}]},{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.cs"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.cs"}},patterns:[{include:"#class-or-struct-members"}]},{include:"#preprocessor"},{include:"#comment"}]},"struct-declaration":{begin:"(?=(\\brecord\\b\\s+)?\\bstruct\\b)",end:"(?<=\\})|(?=;)",patterns:[{begin:`(?x)
(\\b(record)\\b\\s+)?
(struct)\\b\\s+
(@?[_[:alpha:]][_[:alnum:]]*)`,beginCaptures:{2:{name:"storage.type.record.cs"},3:{name:"storage.type.struct.cs"},4:{name:"entity.name.type.struct.cs"}},end:"(?=\\{)|(?=;)",patterns:[{include:"#comment"},{include:"#type-parameter-list"},{include:"#parenthesized-parameter-list"},{include:"#base-types"},{include:"#generic-constraints"}]},{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.cs"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.cs"}},patterns:[{include:"#class-or-struct-members"}]},{include:"#preprocessor"},{include:"#comment"}]},"type-parameter-list":{begin:"\\<",beginCaptures:{0:{name:"punctuation.definition.typeparameters.begin.cs"}},end:"\\>",endCaptures:{0:{name:"punctuation.definition.typeparameters.end.cs"}},patterns:[{match:"\\b(in|out)\\b",name:"storage.modifier.$1.cs"},{match:"(@?[_[:alpha:]][_[:alnum:]]*)\\b",name:"entity.name.type.type-parameter.cs"},{include:"#comment"},{include:"#punctuation-comma"},{include:"#attribute-section"}]},"base-types":{begin:":",beginCaptures:{0:{name:"punctuation.separator.colon.cs"}},end:"(?=\\{|where|;)",patterns:[{include:"#type"},{include:"#punctuation-comma"},{include:"#preprocessor"}]},"generic-constraints":{begin:"(where)\\s+(@?[_[:alpha:]][_[:alnum:]]*)\\s*(:)",beginCaptures:{1:{name:"storage.modifier.where.cs"},2:{name:"entity.name.type.type-parameter.cs"},3:{name:"punctuation.separator.colon.cs"}},end:"(?=\\{|where|;|=>)",patterns:[{name:"storage.type.class.cs",match:"\\bclass\\b"},{name:"storage.type.struct.cs",match:"\\bstruct\\b"},{match:"(new)\\s*(\\()\\s*(\\))",captures:{1:{name:"keyword.operator.expression.new.cs"},2:{name:"punctuation.parenthesis.open.cs"},3:{name:"punctuation.parenthesis.close.cs"}}},{include:"#type"},{include:"#punctuation-comma"},{include:"#generic-constraints"}]},"field-declaration":{begin:`(?x)
(?<type_name>
  (?:
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s* # array suffix?
      \\[
        (?:\\s*,\\s*)* # commata for multi-dimensional arrays
      \\]
      \\s*
      (?:\\?)? # arrays can be nullable reference types
      \\s*
    )*
  )
)\\s+
(\\g<identifier>)\\s* # first field name
(?!=>|==)(?=,|;|=|$)`,beginCaptures:{1:{patterns:[{include:"#type"}]},6:{name:"entity.name.variable.field.cs"}},end:"(?=;)",patterns:[{name:"entity.name.variable.field.cs",match:"@?[_[:alpha:]][_[:alnum:]]*"},{include:"#punctuation-comma"},{include:"#comment"},{include:"#variable-initializer"},{include:"#class-or-struct-members"}]},"property-declaration":{begin:`(?x)

# The negative lookahead below ensures that we don't match nested types
# or other declarations as properties.
(?![[:word:][:space:]]*\\b(?:class|interface|struct|enum|event)\\b)

(?<return_type>
  (?<type_name>
    (?:
      (?:ref\\s+(?:readonly\\s+)?)?   # ref return
      (?:
        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
        (?<name_and_type_args> # identifier + type arguments (if any)
          \\g<identifier>\\s*
          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
        )
        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
      )
      (?:\\s*\\?\\s*)? # nullable suffix?
      (?:\\s* # array suffix?
        \\[
          (?:\\s*,\\s*)* # commata for multi-dimensional arrays
        \\]
        \\s*
        (?:\\?)? # arrays can be nullable reference types
        \\s*
      )*
    )
  )\\s+
)
(?<interface_name>\\g<type_name>\\s*\\.\\s*)?
(?<property_name>\\g<identifier>)\\s*
(?=\\{|=>|//|/\\*|$)`,beginCaptures:{1:{patterns:[{include:"#type"}]},7:{patterns:[{include:"#type"},{include:"#punctuation-accessor"}]},8:{name:"entity.name.variable.property.cs"}},end:"(?<=\\})|(?=;)",patterns:[{include:"#comment"},{include:"#property-accessors"},{include:"#accessor-getter-expression"},{include:"#variable-initializer"},{include:"#class-or-struct-members"}]},"indexer-declaration":{begin:`(?x)
(?<return_type>
  (?<type_name>
    (?:
      (?:ref\\s+(?:readonly\\s+)?)?   # ref return
      (?:
        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
        (?<name_and_type_args> # identifier + type arguments (if any)
          \\g<identifier>\\s*
          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
        )
        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
      )
      (?:\\s*\\?\\s*)? # nullable suffix?
      (?:\\s* # array suffix?
        \\[
          (?:\\s*,\\s*)* # commata for multi-dimensional arrays
        \\]
        \\s*
        (?:\\?)? # arrays can be nullable reference types
        \\s*
      )*
    )
  )\\s+
)
(?<interface_name>\\g<type_name>\\s*\\.\\s*)?
(?<indexer_name>this)\\s*
(?=\\[)`,beginCaptures:{1:{patterns:[{include:"#type"}]},7:{patterns:[{include:"#type"},{include:"#punctuation-accessor"}]},8:{name:"variable.language.this.cs"}},end:"(?<=\\})|(?=;)",patterns:[{include:"#comment"},{include:"#bracketed-parameter-list"},{include:"#property-accessors"},{include:"#accessor-getter-expression"},{include:"#variable-initializer"}]},"event-declaration":{begin:`(?x)
\\b(event)\\b\\s*
(?<return_type>
  (?<type_name>
    (?:
      (?:
        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
        (?<name_and_type_args> # identifier + type arguments (if any)
          \\g<identifier>\\s*
          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
        )
        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
      )
      (?:\\s*\\?\\s*)? # nullable suffix?
      (?:\\s* # array suffix?
        \\[
          (?:\\s*,\\s*)* # commata for multi-dimensional arrays
        \\]
        \\s*
        (?:\\?)? # arrays can be nullable reference types
        \\s*
      )*
    )
  )\\s+
)
(?<interface_name>\\g<type_name>\\s*\\.\\s*)?
(\\g<identifier>)\\s* # first event name
(?=\\{|;|,|=|//|/\\*|$)`,beginCaptures:{1:{name:"storage.type.event.cs"},2:{patterns:[{include:"#type"}]},8:{patterns:[{include:"#type"},{include:"#punctuation-accessor"}]},9:{name:"entity.name.variable.event.cs"}},end:"(?<=\\})|(?=;)",patterns:[{include:"#comment"},{include:"#event-accessors"},{name:"entity.name.variable.event.cs",match:"@?[_[:alpha:]][_[:alnum:]]*"},{include:"#punctuation-comma"},{begin:"=",beginCaptures:{0:{name:"keyword.operator.assignment.cs"}},end:"(?<=,)|(?=;)",patterns:[{include:"#expression"},{include:"#punctuation-comma"}]}]},"property-accessors":{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.cs"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.cs"}},patterns:[{include:"#comment"},{include:"#attribute-section"},{name:"storage.modifier.$1.cs",match:"\\b(private|protected|internal)\\b"},{begin:"\\b(get)\\b\\s*(?=\\{|;|=>|//|/\\*|$)",beginCaptures:{1:{name:"storage.type.accessor.$1.cs"}},end:"(?<=\\}|;)|(?=\\})",patterns:[{include:"#accessor-getter"}]},{begin:"\\b(set|init)\\b\\s*(?=\\{|;|=>|//|/\\*|$)",beginCaptures:{1:{name:"storage.type.accessor.$1.cs"}},end:"(?<=\\}|;)|(?=\\})",patterns:[{include:"#accessor-setter"}]}]},"event-accessors":{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.cs"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.cs"}},patterns:[{include:"#comment"},{include:"#attribute-section"},{begin:"\\b(add|remove)\\b\\s*(?=\\{|;|=>|//|/\\*|$)",beginCaptures:{1:{name:"storage.type.accessor.$1.cs"}},end:"(?<=\\}|;)|(?=\\})",patterns:[{include:"#accessor-setter"}]}]},"accessor-getter":{patterns:[{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.cs"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.cs"}},contentName:"meta.accessor.getter.cs",patterns:[{include:"#statement"}]},{include:"#accessor-getter-expression"},{include:"#punctuation-semicolon"}]},"accessor-getter-expression":{begin:"=>",beginCaptures:{0:{name:"keyword.operator.arrow.cs"}},end:"(?=;|\\})",contentName:"meta.accessor.getter.cs",patterns:[{include:"#ref-modifier"},{include:"#expression"}]},"accessor-setter":{patterns:[{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.cs"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.cs"}},contentName:"meta.accessor.setter.cs",patterns:[{include:"#statement"}]},{begin:"=>",beginCaptures:{0:{name:"keyword.operator.arrow.cs"}},end:"(?=;|\\})",contentName:"meta.accessor.setter.cs",patterns:[{include:"#ref-modifier"},{include:"#expression"}]},{include:"#punctuation-semicolon"}]},"method-declaration":{begin:`(?x)
(?<return_type>
  (?<type_name>
    (?:
      (?:ref\\s+(?:readonly\\s+)?)?   # ref return
      (?:
        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
        (?<name_and_type_args> # identifier + type arguments (if any)
          \\g<identifier>\\s*
          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
        )
        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
      )
      (?:\\s*\\?\\s*)? # nullable suffix?
      (?:\\s* # array suffix?
        \\[
          (?:\\s*,\\s*)* # commata for multi-dimensional arrays
        \\]
        \\s*
        (?:\\?)? # arrays can be nullable reference types
        \\s*
      )*
    )
  )\\s+
)
(?<interface_name>\\g<type_name>\\s*\\.\\s*)?
(\\g<identifier>)\\s*
(<([^<>]+)>)?\\s*
(?=\\()`,beginCaptures:{1:{patterns:[{include:"#type"}]},7:{patterns:[{include:"#type"},{include:"#punctuation-accessor"}]},8:{name:"entity.name.function.cs"},9:{patterns:[{include:"#type-parameter-list"}]}},end:"(?<=\\})|(?=;)",patterns:[{include:"#comment"},{include:"#parenthesized-parameter-list"},{include:"#generic-constraints"},{include:"#expression-body"},{include:"#block"}]},"constructor-declaration":{begin:"(?=@?[_[:alpha:]][_[:alnum:]]*\\s*\\()",end:"(?<=\\})|(?=;)",patterns:[{match:"(@?[_[:alpha:]][_[:alnum:]]*)\\b",captures:{1:{name:"entity.name.function.cs"}}},{begin:"(:)",beginCaptures:{1:{name:"punctuation.separator.colon.cs"}},end:"(?=\\{|=>)",patterns:[{include:"#constructor-initializer"}]},{include:"#parenthesized-parameter-list"},{include:"#preprocessor"},{include:"#comment"},{include:"#expression-body"},{include:"#block"}]},"constructor-initializer":{begin:"\\b(base|this)\\b\\s*(?=\\()",beginCaptures:{1:{name:"variable.language.$1.cs"}},end:"(?<=\\))",patterns:[{include:"#argument-list"}]},"destructor-declaration":{begin:"(~)(@?[_[:alpha:]][_[:alnum:]]*)\\s*(?=\\()",beginCaptures:{1:{name:"punctuation.tilde.cs"},2:{name:"entity.name.function.cs"}},end:"(?<=\\})|(?=;)",patterns:[{include:"#comment"},{include:"#parenthesized-parameter-list"},{include:"#expression-body"},{include:"#block"}]},"operator-declaration":{begin:`(?x)
(?<type_name>
  (?:
    (?:ref\\s+(?:readonly\\s+)?)?   # ref return
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s* # array suffix?
      \\[
        (?:\\s*,\\s*)* # commata for multi-dimensional arrays
      \\]
      \\s*
      (?:\\?)? # arrays can be nullable reference types
      \\s*
    )*
  )
)\\s*
\\b(?<operator_keyword>operator)\\b\\s*
(?<operator>[+\\-*/%&|\\^!=~<>]+|true|false)\\s*
(?=\\()`,beginCaptures:{1:{patterns:[{include:"#type"}]},6:{name:"storage.type.operator.cs"},7:{name:"entity.name.function.cs"}},end:"(?<=\\})|(?=;)",patterns:[{include:"#comment"},{include:"#parenthesized-parameter-list"},{include:"#expression-body"},{include:"#block"}]},"conversion-operator-declaration":{begin:`(?x)
(?<explicit_or_implicit_keyword>(?:\\b(?:explicit|implicit)))\\s*
(?<operator_keyword>(?:\\b(?:operator)))\\s*
(?<type_name>
  (?:
    (?:ref\\s+(?:readonly\\s+)?)?   # ref return
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s* # array suffix?
      \\[
        (?:\\s*,\\s*)* # commata for multi-dimensional arrays
      \\]
      \\s*
      (?:\\?)? # arrays can be nullable reference types
      \\s*
    )*
  )
)\\s*
(?=\\()`,beginCaptures:{1:{patterns:[{match:"\\b(explicit)\\b",captures:{1:{name:"storage.modifier.explicit.cs"}}},{match:"\\b(implicit)\\b",captures:{1:{name:"storage.modifier.implicit.cs"}}}]},2:{name:"storage.type.operator.cs"},3:{patterns:[{include:"#type"}]}},end:"(?<=\\})|(?=;)",patterns:[{include:"#comment"},{include:"#parenthesized-parameter-list"},{include:"#expression-body"},{include:"#block"}]},block:{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.cs"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.cs"}},patterns:[{include:"#statement"}]},"variable-initializer":{begin:"(?<!=|!)(=)(?!=|>)",beginCaptures:{1:{name:"keyword.operator.assignment.cs"}},end:"(?=[,\\)\\];}])",patterns:[{include:"#ref-modifier"},{include:"#expression"}]},"expression-body":{begin:"=>",beginCaptures:{0:{name:"keyword.operator.arrow.cs"}},end:"(?=[,\\);}])",patterns:[{include:"#ref-modifier"},{include:"#expression"}]},"goto-statement":{begin:"(?<!\\.)\\b(goto)\\b",beginCaptures:{1:{name:"keyword.control.flow.goto.cs"}},end:"(?=[;}])",patterns:[{begin:"\\b(case)\\b",beginCaptures:{1:{name:"keyword.control.conditional.case.cs"}},end:"(?=[;}])",patterns:[{include:"#expression"}]},{match:"\\b(default)\\b",captures:{1:{name:"keyword.control.conditional.default.cs"}}},{name:"entity.name.label.cs",match:"@?[_[:alpha:]][_[:alnum:]]*"}]},"return-statement":{begin:"(?<!\\.)\\b(return)\\b",beginCaptures:{1:{name:"keyword.control.flow.return.cs"}},end:"(?=[;}])",patterns:[{include:"#ref-modifier"},{include:"#expression"}]},"break-or-continue-statement":{match:"(?<!\\.)\\b(break|continue)\\b",name:"keyword.control.flow.$1.cs"},"throw-statement":{begin:"(?<!\\.)\\b(throw)\\b",beginCaptures:{1:{name:"keyword.control.flow.throw.cs"}},end:"(?=[;}])",patterns:[{include:"#expression"}]},"yield-statement":{patterns:[{include:"#yield-return-statement"},{include:"#yield-break-statement"}]},"yield-return-statement":{begin:"(?<!\\.)\\b(yield)\\b\\s*\\b(return)\\b",beginCaptures:{1:{name:"keyword.control.flow.yield.cs"},2:{name:"keyword.control.flow.return.cs"}},end:"(?=[;}])",patterns:[{include:"#expression"}]},"yield-break-statement":{match:"(?<!\\.)\\b(yield)\\b\\s*\\b(break)\\b",captures:{1:{name:"keyword.control.flow.yield.cs"},2:{name:"keyword.control.flow.break.cs"}}},"await-statement":{begin:"(?<!\\.\\s*)\\b(await)\\b",beginCaptures:{1:{name:"keyword.operator.expression.await.cs"}},end:"(?<=})|(?=;|})",patterns:[{include:"#foreach-statement"},{include:"#using-statement"},{include:"#expression"}]},"if-statement":{begin:"(?<!\\.)\\b(if)\\b\\s*(?=\\()",beginCaptures:{1:{name:"keyword.control.conditional.if.cs"}},end:"(?<=})|(?=;)",patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#expression"}]},{include:"#statement"}]},"else-part":{begin:"(?<!\\.)\\b(else)\\b",beginCaptures:{1:{name:"keyword.control.conditional.else.cs"}},end:"(?<=})|(?=;)",patterns:[{include:"#statement"}]},"switch-statement-or-expression":{begin:"(?<!\\.)\\b(switch)\\b",beginCaptures:{1:{name:"keyword.control.conditional.switch.cs"}},end:"(?<=})|(?=})",patterns:[{include:"#intrusive"},{begin:"(?=\\()",end:"(?<=\\})|(?=\\})",patterns:[{include:"#switch-statement"}]},{begin:"(?=\\{)",end:"(?<=\\})|(?=\\})",patterns:[{include:"#switch-expression"}]}]},"switch-statement":{patterns:[{include:"#intrusive"},{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#expression"}]},{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.cs"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.cs"}},patterns:[{include:"#switch-label"},{include:"#statement"}]}]},"switch-label":{begin:"\\b(case|default)\\b",beginCaptures:{1:{name:"keyword.control.conditional.$1.cs"}},end:"(:)|(?=})",endCaptures:{1:{name:"punctuation.separator.colon.cs"}},patterns:[{begin:"\\b(when)\\b",beginCaptures:{1:{name:"keyword.control.conditional.when.cs"}},end:"(?=:|})",patterns:[{include:"#case-guard"}]},{begin:"(?!\\s)",end:"(?=\\bwhen\\b|:|})",patterns:[{include:"#pattern"}]}]},"switch-expression":{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.cs"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.cs"}},patterns:[{include:"#punctuation-comma"},{begin:"=>",beginCaptures:{0:{name:"keyword.operator.arrow.cs"}},end:"(?=,|})",patterns:[{include:"#expression"}]},{begin:"\\b(when)\\b",beginCaptures:{1:{name:"keyword.control.conditional.when.cs"}},end:"(?==>|,|})",patterns:[{include:"#case-guard"}]},{begin:"(?!\\s)",end:"(?=\\bwhen\\b|=>|,|})",patterns:[{include:"#pattern"}]}]},"case-guard":{patterns:[{include:"#parenthesized-expression"},{include:"#expression"}]},"is-expression":{begin:"(?<!\\.)\\b(is)\\b",beginCaptures:{1:{name:"keyword.operator.expression.pattern.is.cs"}},end:"(?=[)}\\],;:?=&|^]|!=)",patterns:[{include:"#pattern"}]},pattern:{patterns:[{include:"#intrusive"},{include:"#combinator-pattern"},{include:"#discard-pattern"},{include:"#constant-pattern"},{include:"#relational-pattern"},{include:"#var-pattern"},{include:"#type-pattern"},{include:"#positional-pattern"},{include:"#property-pattern"},{include:"#list-pattern"},{include:"#slice-pattern"}]},"combinator-pattern":{match:"\\b(and|or|not)\\b",name:"keyword.operator.expression.pattern.combinator.$1.cs"},"discard-pattern":{match:"_(?![_[:alnum:]])",name:"variable.language.discard.cs"},"constant-pattern":{patterns:[{include:"#boolean-literal"},{include:"#null-literal"},{include:"#numeric-literal"},{include:"#char-literal"},{include:"#string-literal"},{include:"#raw-string-literal"},{include:"#verbatim-string-literal"},{include:"#type-operator-expression"},{include:"#expression-operator-expression"},{include:"#expression-operators"},{include:"#casted-constant-pattern"}]},"casted-constant-pattern":{begin:`(?x)
(\\()
  ([\\s.:@_[:alnum:]]+)
(\\))
(?=[\\s+\\-!~]*@?[_[:alnum:]('"]+)`,beginCaptures:{1:{name:"punctuation.parenthesis.open.cs"},2:{patterns:[{include:"#type-builtin"},{include:"#type-name"}]},3:{name:"punctuation.parenthesis.close.cs"}},end:"(?=[)}\\],;:?=&|^]|!=|\\b(and|or|when)\\b)",patterns:[{include:"#casted-constant-pattern"},{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#constant-pattern"}]},{include:"#constant-pattern"},{match:"(@?[_[:alpha:]][_[:alnum:]]*)\\s*(\\:\\:)",captures:{1:{name:"entity.name.type.alias.cs"},2:{name:"punctuation.separator.coloncolon.cs"}}},{match:"(@?[_[:alpha:]][_[:alnum:]]*)\\s*(\\.)",captures:{1:{name:"entity.name.type.cs"},2:{name:"punctuation.accessor.cs"}}},{match:"\\@?[_[:alpha:]][_[:alnum:]]*",name:"variable.other.constant.cs"}]},"relational-pattern":{begin:"<=?|>=?",beginCaptures:{0:{name:"keyword.operator.relational.cs"}},end:"(?=[)}\\],;:?=&|^]|!=|\\b(and|or|when)\\b)",patterns:[{include:"#expression"}]},"var-pattern":{begin:"\\b(var)\\b",beginCaptures:{1:{name:"storage.type.var.cs"}},end:"(?=[)}\\],;:?=&|^]|!=|\\b(and|or|when)\\b)",patterns:[{include:"#designation-pattern"}]},"designation-pattern":{patterns:[{include:"#intrusive"},{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#punctuation-comma"},{include:"#designation-pattern"}]},{include:"#simple-designation-pattern"}]},"simple-designation-pattern":{patterns:[{include:"#discard-pattern"},{match:"@?[_[:alpha:]][_[:alnum:]]*",name:"entity.name.variable.local.cs"}]},"type-pattern":{begin:"(?=@?[_[:alpha:]][_[:alnum:]]*)",end:"(?=[)}\\],;:?=&|^]|!=|\\b(and|or|when)\\b)",patterns:[{begin:"\\G",end:"(?!\\G[@_[:alpha:]])(?=[\\({@_[:alpha:])}\\],;:=&|^]|(?:\\s|^)\\?|!=|\\b(and|or|when)\\b)",patterns:[{include:"#intrusive"},{include:"#type-subpattern"}]},{begin:"(?=[\\({@_[:alpha:]])",end:"(?=[)}\\],;:?=&|^]|!=|\\b(and|or|when)\\b)",patterns:[{include:"#intrusive"},{include:"#positional-pattern"},{include:"#property-pattern"},{include:"#simple-designation-pattern"}]}]},"type-subpattern":{patterns:[{include:"#type-builtin"},{begin:"(@?[_[:alpha:]][_[:alnum:]]*)\\s*(::)",beginCaptures:{1:{name:"entity.name.type.alias.cs"},2:{name:"punctuation.separator.coloncolon.cs"}},end:"(?<=[_[:alnum:]])|(?=[.<\\[\\({)}\\],;:?=&|^]|!=|\\b(and|or|when)\\b)",patterns:[{include:"#intrusive"},{match:"\\@?[_[:alpha:]][_[:alnum:]]*",name:"entity.name.type.cs"}]},{match:"\\@?[_[:alpha:]][_[:alnum:]]*",name:"entity.name.type.cs"},{begin:"\\.",beginCaptures:{0:{name:"punctuation.accessor.cs"}},end:"(?<=[_[:alnum:]])|(?=[<\\[\\({)}\\],;:?=&|^]|!=|\\b(and|or|when)\\b)",patterns:[{include:"#intrusive"},{match:"\\@?[_[:alpha:]][_[:alnum:]]*",name:"entity.name.type.cs"}]},{include:"#type-arguments"},{include:"#type-array-suffix"},{match:"(?<!\\s)\\?",name:"punctuation.separator.question-mark.cs"}]},"positional-pattern":{begin:"(?=\\()",end:"(?=[)}\\],;:?=&|^]|!=|\\b(and|or|when)\\b)",patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#subpattern"},{include:"#punctuation-comma"}]},{begin:"(?<=\\))",end:"(?=[)}\\],;:?=&|^]|!=|\\b(and|or|when)\\b)",patterns:[{include:"#intrusive"},{include:"#property-pattern"},{include:"#simple-designation-pattern"}]}]},"property-pattern":{begin:"(?={)",end:"(?=[)}\\],;:?=&|^]|!=|\\b(and|or|when)\\b)",patterns:[{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.cs"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.cs"}},patterns:[{include:"#subpattern"},{include:"#punctuation-comma"}]},{begin:"(?<=\\})",end:"(?=[)}\\],;:?=&|^]|!=|\\b(and|or|when)\\b)",patterns:[{include:"#intrusive"},{include:"#simple-designation-pattern"}]}]},subpattern:{patterns:[{match:"(@?[_[:alpha:]][_[:alnum:]]*(?:\\s*\\.\\s*@?[_[:alpha:]][_[:alnum:]]*)*)\\s*(:)",captures:{1:{patterns:[{match:"\\@?[_[:alpha:]][_[:alnum:]]*",name:"variable.other.object.property.cs"},{include:"#punctuation-accessor"}]},2:{name:"punctuation.separator.colon.cs"}}},{include:"#pattern"}]},"list-pattern":{begin:"(?=\\[)",end:"(?=[)}\\],;:?=&|^]|!=|\\b(and|or|when)\\b)",patterns:[{begin:"\\[",beginCaptures:{0:{name:"punctuation.squarebracket.open.cs"}},end:"\\]",endCaptures:{0:{name:"punctuation.squarebracket.close.cs"}},patterns:[{include:"#pattern"},{include:"#punctuation-comma"}]},{begin:"(?<=\\])",end:"(?=[)}\\],;:?=&|^]|!=|\\b(and|or|when)\\b)",patterns:[{include:"#intrusive"},{include:"#simple-designation-pattern"}]}]},"slice-pattern":{match:"\\.\\.",name:"keyword.operator.range.cs"},"do-statement":{begin:"(?<!\\.)\\b(do)\\b",beginCaptures:{1:{name:"keyword.control.loop.do.cs"}},end:"(?=;|})",patterns:[{include:"#statement"}]},"while-statement":{begin:"(?<!\\.)\\b(while)\\b\\s*(?=\\()",beginCaptures:{1:{name:"keyword.control.loop.while.cs"}},end:"(?<=\\})|(?=;)",patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#expression"}]},{include:"#statement"}]},"for-statement":{begin:"\\b(for)\\b",beginCaptures:{1:{name:"keyword.control.loop.for.cs"}},end:"(?<=\\))|(?=;|})",patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{begin:"\\G",end:"(?=;|\\))",patterns:[{include:"#intrusive"},{include:"#local-variable-declaration"}]},{begin:"(?=;)",end:"(?=\\))",patterns:[{include:"#intrusive"},{include:"#expression"},{include:"#punctuation-comma"},{include:"#punctuation-semicolon"}]}]}]},"foreach-statement":{begin:"\\b(foreach)\\b",beginCaptures:{1:{name:"keyword.control.loop.foreach.cs"}},end:"(?<=\\))|(?=;|})",patterns:[{include:"#intrusive"},{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#intrusive"},{match:`(?x)
(?:
  (\\bvar\\b)|
  (?<type_name>
    (?:
      (?:
        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
        (?<name_and_type_args> # identifier + type arguments (if any)
          \\g<identifier>\\s*
          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
        )
        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
      )
      (?:\\s*\\?\\s*)? # nullable suffix?
      (?:\\s* # array suffix?
        \\[
          (?:\\s*,\\s*)* # commata for multi-dimensional arrays
        \\]
        \\s*
        (?:\\?)? # arrays can be nullable reference types
        \\s*
      )*
    )
  )
)\\s+
(\\g<identifier>)\\s+
\\b(in)\\b`,captures:{1:{name:"storage.type.var.cs"},2:{patterns:[{include:"#type"}]},7:{name:"entity.name.variable.local.cs"},8:{name:"keyword.control.loop.in.cs"}}},{match:`(?x) # match foreach (var (x, y) in ...)
(?:\\b(var)\\b\\s*)?
(?<tuple>\\((?:[^\\(\\)]|\\g<tuple>)+\\))\\s+
\\b(in)\\b`,captures:{1:{name:"storage.type.var.cs"},2:{patterns:[{include:"#tuple-declaration-deconstruction-element-list"}]},3:{name:"keyword.control.loop.in.cs"}}},{include:"#expression"}]}]},"try-statement":{patterns:[{include:"#try-block"},{include:"#catch-clause"},{include:"#finally-clause"}]},"try-block":{begin:"(?<!\\.)\\b(try)\\b",beginCaptures:{1:{name:"keyword.control.exception.try.cs"}},end:"(?<=\\})",patterns:[{include:"#comment"},{include:"#block"}]},"finally-clause":{begin:"(?<!\\.)\\b(finally)\\b",beginCaptures:{1:{name:"keyword.control.exception.finally.cs"}},end:"(?<=\\})",patterns:[{include:"#comment"},{include:"#block"}]},"catch-clause":{begin:"(?<!\\.)\\b(catch)\\b",beginCaptures:{1:{name:"keyword.control.exception.catch.cs"}},end:"(?<=\\})",patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{match:`(?x)
(?<type_name>
  (?:
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s* # array suffix?
      \\[
        (?:\\s*,\\s*)* # commata for multi-dimensional arrays
      \\]
      \\s*
      (?:\\?)? # arrays can be nullable reference types
      \\s*
    )*
  )
)\\s*
(?:(\\g<identifier>)\\b)?`,captures:{1:{patterns:[{include:"#type"}]},6:{name:"entity.name.variable.local.cs"}}}]},{include:"#when-clause"},{include:"#comment"},{include:"#block"}]},"when-clause":{begin:"(?<!\\.)\\b(when)\\b\\s*(\\()",beginCaptures:{1:{name:"keyword.control.exception.when.cs"},2:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#expression"},{include:"#comment"}]},"context-control-statement":{match:"\\b(checked|unchecked|unsafe)\\b(?!\\s*[@_[:alpha:](])",name:"keyword.control.context.$1.cs"},"context-control-paren-statement":{patterns:[{include:"#fixed-statement"},{include:"#lock-statement"},{include:"#using-statement"}]},"fixed-statement":{begin:"\\b(fixed)\\b",beginCaptures:{1:{name:"keyword.control.context.fixed.cs"}},end:"(?<=\\))|(?=;|})",patterns:[{include:"#intrusive"},{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#intrusive"},{include:"#local-variable-declaration"}]}]},"lock-statement":{begin:"\\b(lock)\\b",beginCaptures:{1:{name:"keyword.control.context.lock.cs"}},end:"(?<=\\))|(?=;|})",patterns:[{include:"#intrusive"},{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#intrusive"},{include:"#expression"}]}]},"using-statement":{begin:"\\b(using)\\b",beginCaptures:{1:{name:"keyword.control.context.using.cs"}},end:"(?<=\\))|(?=;|})",patterns:[{include:"#intrusive"},{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#intrusive"},{include:"#await-expression"},{include:"#local-variable-declaration"},{include:"#expression"}]},{include:"#local-variable-declaration"}]},"labeled-statement":{match:"(@?[_[:alpha:]][_[:alnum:]]*)\\s*(:)",captures:{1:{name:"entity.name.label.cs"},2:{name:"punctuation.separator.colon.cs"}}},"local-declaration":{patterns:[{include:"#local-constant-declaration"},{include:"#local-variable-declaration"},{include:"#local-function-declaration"},{include:"#local-tuple-var-deconstruction"}]},"local-variable-declaration":{begin:`(?x)
(?:
  (?:(\\bref)\\s+(?:(\\breadonly)\\s+)?)?(\\bvar\\b)| # ref local
  (?<type_name>
    (?:
      (?:ref\\s+(?:readonly\\s+)?)?   # ref local
      (?:
        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
        (?<name_and_type_args> # identifier + type arguments (if any)
          \\g<identifier>\\s*
          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
        )
        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
      )
      (?:\\s*[?*]\\s*)? # nullable or pointer suffix?
      (?:\\s* # array suffix?
        \\[
          (?:\\s*,\\s*)* # commata for multi-dimensional arrays
        \\]
        \\s*
        (?:\\?)? # arrays can be nullable reference types
        \\s*
      )*
    )
  )
)\\s+
(\\g<identifier>)\\s*
(?!=>)
(?=,|;|=|\\))`,beginCaptures:{1:{name:"storage.modifier.ref.cs"},2:{name:"storage.modifier.readonly.cs"},3:{name:"storage.type.var.cs"},4:{patterns:[{include:"#type"}]},9:{name:"entity.name.variable.local.cs"}},end:"(?=[;)}])",patterns:[{name:"entity.name.variable.local.cs",match:"@?[_[:alpha:]][_[:alnum:]]*"},{include:"#punctuation-comma"},{include:"#comment"},{include:"#variable-initializer"}]},"local-constant-declaration":{begin:`(?x)
(?<const_keyword>\\b(?:const)\\b)\\s*
(?<type_name>
  (?:
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s* # array suffix?
      \\[
        (?:\\s*,\\s*)* # commata for multi-dimensional arrays
      \\]
      \\s*
      (?:\\?)? # arrays can be nullable reference types
      \\s*
    )*
  )
)\\s+
(\\g<identifier>)\\s*
(?=,|;|=)`,beginCaptures:{1:{name:"storage.modifier.const.cs"},2:{patterns:[{include:"#type"}]},7:{name:"entity.name.variable.local.cs"}},end:"(?=;)",patterns:[{name:"entity.name.variable.local.cs",match:"@?[_[:alpha:]][_[:alnum:]]*"},{include:"#punctuation-comma"},{include:"#comment"},{include:"#variable-initializer"}]},"local-function-declaration":{begin:`(?x)
\\b((?:(?:async|unsafe|static|extern)\\s+)*)
(?<type_name>
  (?:ref\\s+(?:readonly\\s+)?)?   # ref return
  (?:
    (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
    (?<name_and_type_args> # identifier + type arguments (if any)
      \\g<identifier>\\s*
      (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
    )
    (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
    (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
  )
  (?:\\s*\\?)? # nullable suffix?
  (?:\\s* # array suffix?
    \\[
      \\s*(?:,\\s*)* # commata for multi-dimensional arrays
    \\]
    (?:\\s*\\?)? # arrays can be nullable reference types
  )*
)\\s+
(\\g<identifier>)\\s*
(<[^<>]+>)?\\s*
(?=\\()`,beginCaptures:{1:{patterns:[{include:"#storage-modifier"}]},2:{patterns:[{include:"#type"}]},7:{name:"entity.name.function.cs"},8:{patterns:[{include:"#type-parameter-list"}]}},end:"(?<=\\})|(?=;)",patterns:[{include:"#comment"},{include:"#parenthesized-parameter-list"},{include:"#generic-constraints"},{include:"#expression-body"},{include:"#block"}]},"local-tuple-var-deconstruction":{begin:`(?x) # e.g. var (x, y) = GetPoint();
(?:\\b(var)\\b\\s*)
(?<tuple>\\((?:[^\\(\\)]|\\g<tuple>)+\\))\\s*
(?=;|=|\\))`,beginCaptures:{1:{name:"storage.type.var.cs"},2:{patterns:[{include:"#tuple-declaration-deconstruction-element-list"}]}},end:"(?=;|\\))",patterns:[{include:"#comment"},{include:"#variable-initializer"}]},"tuple-deconstruction-assignment":{match:`(?x)
(?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\\s*
(?!=>|==)(?==)`,captures:{1:{patterns:[{include:"#tuple-deconstruction-element-list"}]}}},"tuple-declaration-deconstruction-element-list":{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#comment"},{include:"#tuple-declaration-deconstruction-element-list"},{include:"#declaration-expression-tuple"},{include:"#punctuation-comma"},{match:`(?x) # e.g. x
(@?[_[:alpha:]][_[:alnum:]]*)\\b\\s*
(?=[,)])`,captures:{1:{name:"entity.name.variable.tuple-element.cs"}}}]},"tuple-deconstruction-element-list":{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#comment"},{include:"#tuple-deconstruction-element-list"},{include:"#declaration-expression-tuple"},{include:"#punctuation-comma"},{match:`(?x) # e.g. x
(@?[_[:alpha:]][_[:alnum:]]*)\\b\\s*
(?=[,)])`,captures:{1:{name:"variable.other.readwrite.cs"}}}]},"declaration-expression-local":{match:`(?x) # e.g. int x OR var x
(?:
  \\b(var)\\b|
  (?<type_name>
    (?:
      (?:
        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
        (?<name_and_type_args> # identifier + type arguments (if any)
          \\g<identifier>\\s*
          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
        )
        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
      )
      (?:\\s*\\?\\s*)? # nullable suffix?
      (?:\\s* # array suffix?
        \\[
          (?:\\s*,\\s*)* # commata for multi-dimensional arrays
        \\]
        \\s*
        (?:\\?)? # arrays can be nullable reference types
        \\s*
      )*
    )
  )
)\\s+
(\\g<identifier>)\\b\\s*
(?=[,)\\]])`,captures:{1:{name:"storage.type.var.cs"},2:{patterns:[{include:"#type"}]},7:{name:"entity.name.variable.local.cs"}}},"declaration-expression-tuple":{match:`(?x) # e.g. int x OR var x
(?:
  \\b(var)\\b|
  (?<type_name>
    (?:
      (?:
        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
        (?<name_and_type_args> # identifier + type arguments (if any)
          \\g<identifier>\\s*
          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
        )
        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
      )
      (?:\\s*\\?\\s*)? # nullable suffix?
                (?:\\s* # array suffix?
      \\[
        (?:\\s*,\\s*)* # commata for multi-dimensional arrays
      \\]
      \\s*
      (?:\\?)? # arrays can be nullable reference types
      \\s*
    )*
    )
  )
)\\s+
(\\g<identifier>)\\b\\s*
(?=[,)])`,captures:{1:{name:"storage.type.var.cs"},2:{patterns:[{include:"#type"}]},7:{name:"entity.name.variable.tuple-element.cs"}}},"expression-operator-expression":{begin:"\\b(checked|unchecked|nameof)\\s*(\\()",beginCaptures:{1:{name:"keyword.operator.expression.$1.cs"},2:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#expression"}]},"type-operator-expression":{begin:"\\b(default|sizeof|typeof)\\s*(\\()",beginCaptures:{1:{name:"keyword.operator.expression.$1.cs"},2:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#type"}]},"default-literal-expression":{match:"\\b(default)\\b",captures:{1:{name:"keyword.operator.expression.default.cs"}}},"throw-expression":{match:"\\b(throw)\\b",captures:{1:{name:"keyword.control.flow.throw.cs"}}},"interpolated-string":{name:"string.quoted.double.cs",begin:'\\$"',beginCaptures:{0:{name:"punctuation.definition.string.begin.cs"}},end:'(")|((?:[^\\\\\\n])$)',endCaptures:{1:{name:"punctuation.definition.string.end.cs"},2:{name:"invalid.illegal.newline.cs"}},patterns:[{include:"#string-character-escape"},{include:"#interpolation"}]},"verbatim-interpolated-string":{name:"string.quoted.double.cs",begin:'(?:\\$@|@\\$)"',beginCaptures:{0:{name:"punctuation.definition.string.begin.cs"}},end:'"(?=[^"])',endCaptures:{0:{name:"punctuation.definition.string.end.cs"}},patterns:[{include:"#verbatim-string-character-escape"},{include:"#interpolation"}]},interpolation:{name:"meta.interpolation.cs",begin:"(?<=[^\\{]|^)((?:\\{\\{)*)(\\{)(?=[^\\{])",beginCaptures:{1:{name:"string.quoted.double.cs"},2:{name:"punctuation.definition.interpolation.begin.cs"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.interpolation.end.cs"}},patterns:[{include:"#expression"}]},"raw-interpolated-string":{patterns:[{include:"#raw-interpolated-string-five-or-more-quote-one-or-more-interpolation"},{include:"#raw-interpolated-string-three-or-more-quote-three-or-more-interpolation"},{include:"#raw-interpolated-string-quadruple-quote-double-interpolation"},{include:"#raw-interpolated-string-quadruple-quote-single-interpolation"},{include:"#raw-interpolated-string-triple-quote-double-interpolation"},{include:"#raw-interpolated-string-triple-quote-single-interpolation"}]},"raw-interpolated-string-triple-quote-single-interpolation":{name:"string.quoted.double.cs",begin:'\\$"""',beginCaptures:{0:{name:"punctuation.definition.string.begin.cs"}},end:'"""',endCaptures:{0:{name:"punctuation.definition.string.end.cs"}},patterns:[{include:"#raw-interpolation"}]},"raw-interpolated-string-triple-quote-double-interpolation":{name:"string.quoted.double.cs",begin:'\\$\\$"""',beginCaptures:{0:{name:"punctuation.definition.string.begin.cs"}},end:'"""',endCaptures:{0:{name:"punctuation.definition.string.end.cs"}},patterns:[{include:"#double-raw-interpolation"}]},"raw-interpolated-string-quadruple-quote-single-interpolation":{name:"string.quoted.double.cs",begin:'\\$""""',beginCaptures:{0:{name:"punctuation.definition.string.begin.cs"}},end:'""""',endCaptures:{0:{name:"punctuation.definition.string.end.cs"}},patterns:[{include:"#raw-interpolation"}]},"raw-interpolated-string-quadruple-quote-double-interpolation":{name:"string.quoted.double.cs",begin:'\\$\\$""""',beginCaptures:{0:{name:"punctuation.definition.string.begin.cs"}},end:'""""',endCaptures:{0:{name:"punctuation.definition.string.end.cs"}},patterns:[{include:"#double-raw-interpolation"}]},"raw-interpolated-string-three-or-more-quote-three-or-more-interpolation":{name:"string.quoted.double.cs",begin:'\\$\\$\\$+"""+',beginCaptures:{0:{name:"punctuation.definition.string.begin.cs"}},end:'"""+',endCaptures:{0:{name:"punctuation.definition.string.end.cs"}}},"raw-interpolated-string-five-or-more-quote-one-or-more-interpolation":{name:"string.quoted.double.cs",begin:'\\$+"""""+',beginCaptures:{0:{name:"punctuation.definition.string.begin.cs"}},end:'"""""+',endCaptures:{0:{name:"punctuation.definition.string.end.cs"}}},"raw-interpolation":{name:"meta.interpolation.cs",begin:"(?<=[^\\{]|^)((?:\\{)*)(\\{)(?=[^\\{])",beginCaptures:{1:{name:"string.quoted.double.cs"},2:{name:"punctuation.definition.interpolation.begin.cs"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.interpolation.end.cs"}},patterns:[{include:"#expression"}]},"double-raw-interpolation":{name:"meta.interpolation.cs",begin:"(?<=[^\\{][^\\{]|^)((?:\\{)*)(\\{\\{)(?=[^\\{])",beginCaptures:{1:{name:"string.quoted.double.cs"},2:{name:"punctuation.definition.interpolation.begin.cs"}},end:"\\}\\}",endCaptures:{0:{name:"punctuation.definition.interpolation.end.cs"}},patterns:[{include:"#expression"}]},literal:{patterns:[{include:"#boolean-literal"},{include:"#null-literal"},{include:"#numeric-literal"},{include:"#char-literal"},{include:"#raw-string-literal"},{include:"#string-literal"},{include:"#verbatim-string-literal"},{include:"#tuple-literal"}]},"boolean-literal":{patterns:[{name:"constant.language.boolean.true.cs",match:"(?<!\\.)\\btrue\\b"},{name:"constant.language.boolean.false.cs",match:"(?<!\\.)\\bfalse\\b"}]},"null-literal":{name:"constant.language.null.cs",match:"(?<!\\.)\\bnull\\b"},"numeric-literal":{match:"(?<!\\w)\\.?\\d(?:(?:[0-9a-zA-Z_]|_)|(?<=[eE])[+-]|\\.\\d)*",captures:{0:{patterns:[{begin:"(?=.)",end:"$",patterns:[{match:"(\\G(?=[0-9.])(?!0[xXbB]))([0-9](?:[0-9]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)?((?:(?<=[0-9])|\\.(?=[0-9])))([0-9](?:[0-9]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)?((?<!_)([eE])(\\+?)(\\-?)((?:[0-9](?:[0-9]|(?:(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)))?([fFdDmM](?!\\w))?$",captures:{2:{name:"constant.numeric.decimal.cs",patterns:[{match:"(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",name:"constant.numeric.other.separator.thousands.cs"}]},3:{name:"constant.numeric.other.separator.thousands.cs"},4:{name:"constant.numeric.other.separator.decimals.cs"},5:{name:"constant.numeric.decimal.cs",patterns:[{match:"(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",name:"constant.numeric.other.separator.thousands.cs"}]},6:{name:"constant.numeric.other.separator.thousands.cs"},8:{name:"constant.numeric.other.exponent.cs"},9:{name:"keyword.operator.arithmetic.cs"},10:{name:"keyword.operator.arithmetic.cs"},11:{name:"constant.numeric.decimal.cs",patterns:[{match:"(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",name:"constant.numeric.other.separator.thousands.cs"}]},12:{name:"constant.numeric.other.suffix.cs"}}},{match:"(\\G0[bB])([01_](?:[01_]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)((?:(?:(?:(?:(?:[uU]|[uU]l)|[uU]L)|l[uU]?)|L[uU]?)|[fFdDmM])(?!\\w))?$",captures:{1:{name:"constant.numeric.other.preffix.binary.cs"},2:{name:"constant.numeric.binary.cs",patterns:[{match:"(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",name:"constant.numeric.other.separator.thousands.cs"}]},3:{name:"constant.numeric.other.separator.thousands.cs"},4:{name:"constant.numeric.other.suffix.cs"}}},{match:"(\\G0[xX])([0-9a-fA-F](?:[0-9a-fA-F]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)((?:(?:(?:(?:(?:[uU]|[uU]l)|[uU]L)|l[uU]?)|L[uU]?)|[fFdDmM])(?!\\w))?$",captures:{1:{name:"constant.numeric.other.preffix.hex.cs"},2:{name:"constant.numeric.hex.cs",patterns:[{match:"(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",name:"constant.numeric.other.separator.thousands.cs"}]},3:{name:"constant.numeric.other.separator.thousands.cs"},4:{name:"constant.numeric.other.suffix.cs"}}},{match:"(\\G(?=[0-9.])(?!0[xXbB]))([0-9](?:[0-9]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)((?<!_)([eE])(\\+?)(\\-?)((?:[0-9](?:[0-9]|(?:(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)))?((?:(?:(?:(?:(?:[uU]|[uU]l)|[uU]L)|l[uU]?)|L[uU]?)|[fFdDmM])(?!\\w))?$",captures:{2:{name:"constant.numeric.decimal.cs",patterns:[{match:"(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",name:"constant.numeric.other.separator.thousands.cs"}]},3:{name:"constant.numeric.other.separator.thousands.cs"},5:{name:"constant.numeric.other.exponent.cs"},6:{name:"keyword.operator.arithmetic.cs"},7:{name:"keyword.operator.arithmetic.cs"},8:{name:"constant.numeric.decimal.cs",patterns:[{match:"(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",name:"constant.numeric.other.separator.thousands.cs"}]},9:{name:"constant.numeric.other.suffix.cs"}}},{match:"(?:(?:[0-9a-zA-Z_]|_)|(?<=[eE])[+-]|\\.\\d)+",name:"invalid.illegal.constant.numeric.cs"}]}]}}},"char-literal":{name:"string.quoted.single.cs",begin:"'",beginCaptures:{0:{name:"punctuation.definition.char.begin.cs"}},end:"(\\')|((?:[^\\\\\\n])$)",endCaptures:{1:{name:"punctuation.definition.char.end.cs"},2:{name:"invalid.illegal.newline.cs"}},patterns:[{include:"#char-character-escape"}]},"char-character-escape":{name:"constant.character.escape.cs",match:"\\\\(x[0-9a-fA-F]{1,4}|u[0-9a-fA-F]{4}|.)"},"string-literal":{name:"string.quoted.double.cs",begin:'(?<!@)"',beginCaptures:{0:{name:"punctuation.definition.string.begin.cs"}},end:'(")|((?:[^\\\\\\n])$)',endCaptures:{1:{name:"punctuation.definition.string.end.cs"},2:{name:"invalid.illegal.newline.cs"}},patterns:[{include:"#string-character-escape"}]},"string-character-escape":{name:"constant.character.escape.cs",match:"\\\\(x[0-9a-fA-F]{1,4}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|.)"},"verbatim-string-literal":{name:"string.quoted.double.cs",begin:'@"',beginCaptures:{0:{name:"punctuation.definition.string.begin.cs"}},end:'"(?=[^"])',endCaptures:{0:{name:"punctuation.definition.string.end.cs"}},patterns:[{include:"#verbatim-string-character-escape"}]},"verbatim-string-character-escape":{name:"constant.character.escape.cs",match:'""'},"raw-string-literal":{patterns:[{include:"#raw-string-literal-more"},{include:"#raw-string-literal-quadruple"},{include:"#raw-string-literal-triple"}]},"raw-string-literal-triple":{name:"string.quoted.double.cs",begin:'"""',beginCaptures:{0:{name:"punctuation.definition.string.begin.cs"}},end:'"""',endCaptures:{0:{name:"punctuation.definition.string.end.cs"}}},"raw-string-literal-quadruple":{name:"string.quoted.double.cs",begin:'""""',beginCaptures:{0:{name:"punctuation.definition.string.begin.cs"}},end:'""""',endCaptures:{0:{name:"punctuation.definition.string.end.cs"}}},"raw-string-literal-more":{name:"string.quoted.double.cs",begin:'"""""+',beginCaptures:{0:{name:"punctuation.definition.string.begin.cs"}},end:'"""""+',endCaptures:{0:{name:"punctuation.definition.string.end.cs"}}},"tuple-literal":{begin:"(\\()(?=.*[:,])",beginCaptures:{1:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#comment"},{include:"#tuple-literal-element"},{include:"#expression"},{include:"#punctuation-comma"}]},"tuple-literal-element":{begin:`(?x)
(@?[_[:alpha:]][_[:alnum:]]*)\\s*
(?=:)`,beginCaptures:{1:{name:"entity.name.variable.tuple-element.cs"}},end:"(:)",endCaptures:{0:{name:"punctuation.separator.colon.cs"}}},"assignment-expression":{begin:"(?:\\*|/|%|\\+|-|\\?\\?|\\&|\\^|<<|>>>?|\\|)?=(?!=|>)",beginCaptures:{0:{patterns:[{include:"#assignment-operators"}]}},end:"(?=[,\\)\\];}])",patterns:[{include:"#ref-modifier"},{include:"#expression"}]},"assignment-operators":{patterns:[{name:"keyword.operator.assignment.compound.cs",match:"\\*=|/=|%=|\\+=|-=|\\?\\?="},{name:"keyword.operator.assignment.compound.bitwise.cs",match:"\\&=|\\^=|<<=|>>>?=|\\|="},{name:"keyword.operator.assignment.cs",match:"\\="}]},"expression-operators":{patterns:[{name:"keyword.operator.bitwise.shift.cs",match:"<<|>>>?"},{name:"keyword.operator.comparison.cs",match:"==|!="},{name:"keyword.operator.relational.cs",match:"<=|>=|<|>"},{name:"keyword.operator.logical.cs",match:"\\!|&&|\\|\\|"},{name:"keyword.operator.bitwise.cs",match:"\\&|~|\\^|\\|"},{name:"keyword.operator.decrement.cs",match:"--"},{name:"keyword.operator.increment.cs",match:"\\+\\+"},{name:"keyword.operator.arithmetic.cs",match:"\\+|-(?!>)|\\*|/|%"},{name:"keyword.operator.null-coalescing.cs",match:"\\?\\?"},{name:"keyword.operator.range.cs",match:"\\.\\."}]},"with-expression":{begin:"(?<!\\.)\\b(with)\\b\\s*(?=\\{|//|/\\*|$)",beginCaptures:{1:{name:"keyword.operator.expression.with.cs"}},end:"(?<=\\})",patterns:[{include:"#comment"},{include:"#initializer-expression"}]},"conditional-operator":{patterns:[{name:"keyword.operator.conditional.question-mark.cs",match:"\\?(?!\\?|\\s*[.\\[])"},{name:"keyword.operator.conditional.colon.cs",match:":"}]},"await-expression":{name:"keyword.operator.expression.await.cs",match:"(?<!\\.\\s*)\\b(await)\\b"},"parenthesized-expression":{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#expression"}]},"initializer-expression":{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.cs"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.cs"}},patterns:[{include:"#expression"},{include:"#punctuation-comma"}]},identifier:{name:"variable.other.readwrite.cs",match:"@?[_[:alpha:]][_[:alnum:]]*"},"cast-expression":{match:`(?x)
(\\()\\s*
(?<type_name>
  (?:
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s* # array suffix?
      \\[
        (?:\\s*,\\s*)* # commata for multi-dimensional arrays
      \\]
      \\s*
      (?:\\?)? # arrays can be nullable reference types
      \\s*
    )*
  )
)\\s*
(\\))(?=\\s*-*!*@?[_[:alnum:]\\(])`,captures:{1:{name:"punctuation.parenthesis.open.cs"},2:{patterns:[{include:"#type"}]},7:{name:"punctuation.parenthesis.close.cs"}}},"as-expression":{match:`(?x)
(?<!\\.)\\b(as)\\b\\s*
(?<type_name>
  (?:
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
    )
    (?:\\s*\\?(?!\\?))? # nullable suffix?
    (?:\\s* # array suffix?
      \\[
        \\s*(?:,\\s*)* # commata for multi-dimensional arrays
      \\]
      (?:\\s*\\?(?!\\?))? # arrays can be nullable reference types
    )*
  )
)?`,captures:{1:{name:"keyword.operator.expression.as.cs"},2:{patterns:[{include:"#type"}]}}},"language-variable":{patterns:[{name:"variable.language.$1.cs",match:"\\b(base|this)\\b"},{name:"variable.other.$1.cs",match:"\\b(value)\\b"}]},"invocation-expression":{begin:`(?x)
(?:
  (?:(\\?)\\s*)?                                    # preceding null-conditional operator?
  (\\.)\\s*|                                        # preceding dot?
  (->)\\s*                                         # preceding pointer arrow?
)?
(@?[_[:alpha:]][_[:alnum:]]*)\\s*                  # method name
(
  <
  (?<type_args>
    [^<>()]++|
    <\\g<type_args>*+>|
    \\(\\g<type_args>*+\\)
  )*+
  >\\s*
)?                                                # type arguments
(?=\\()                                            # open paren of argument list`,beginCaptures:{1:{name:"keyword.operator.null-conditional.cs"},2:{name:"punctuation.accessor.cs"},3:{name:"punctuation.accessor.pointer.cs"},4:{name:"entity.name.function.cs"},5:{patterns:[{include:"#type-arguments"}]}},end:"(?<=\\))",patterns:[{include:"#argument-list"}]},"element-access-expression":{begin:`(?x)
(?:
  (?:(\\?)\\s*)?  # preceding null-conditional operator?
  (\\.)\\s*|      # preceding dot?
  (->)\\s*       # preceding pointer arrow?
)?
(?:(@?[_[:alpha:]][_[:alnum:]]*)\\s*)? # property name
(?:(\\?)\\s*)?                        # null-conditional operator?
(?=\\[)                              # open bracket of argument list`,beginCaptures:{1:{name:"keyword.operator.null-conditional.cs"},2:{name:"punctuation.accessor.cs"},3:{name:"punctuation.accessor.pointer.cs"},4:{name:"variable.other.object.property.cs"},5:{name:"keyword.operator.null-conditional.cs"}},end:"(?<=\\])(?!\\s*\\[)",patterns:[{include:"#bracketed-argument-list"}]},"member-access-expression":{patterns:[{match:`(?x)
(?:
  (?:(\\?)\\s*)?                    # preceding null-conditional operator?
  (\\.)\\s*|                        # preceding dot?
  (->)\\s*                         # preceding pointer arrow?
)
(@?[_[:alpha:]][_[:alnum:]]*)\\s*  # property name
(?![_[:alnum:]]|\\(|(\\?)?\\[|<)     # next character is not alpha-numeric, nor a (, [, or <. Also, test for ?[`,captures:{1:{name:"keyword.operator.null-conditional.cs"},2:{name:"punctuation.accessor.cs"},3:{name:"punctuation.accessor.pointer.cs"},4:{name:"variable.other.object.property.cs"}}},{match:`(?x)
(\\.)?\\s*
(@?[_[:alpha:]][_[:alnum:]]*)
(?<type_params>\\s*<([^<>]|\\g<type_params>)+>\\s*)
(?=
  (\\s*\\?)?
  \\s*\\.\\s*@?[_[:alpha:]][_[:alnum:]]*
)`,captures:{1:{name:"punctuation.accessor.cs"},2:{name:"variable.other.object.cs"},3:{patterns:[{include:"#type-arguments"}]}}},{match:`(?x)
(@?[_[:alpha:]][_[:alnum:]]*)
(?=
  \\s*(?:(?:\\?\\s*)?\\.|->)
  \\s*@?[_[:alpha:]][_[:alnum:]]*
)`,captures:{1:{name:"variable.other.object.cs"}}}]},"object-creation-expression":{patterns:[{include:"#object-creation-expression-with-parameters"},{include:"#object-creation-expression-with-no-parameters"}]},"object-creation-expression-with-parameters":{begin:`(?x)
(new)(?:\\s+
(?<type_name>
  (?:
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s* # array suffix?
      \\[
        (?:\\s*,\\s*)* # commata for multi-dimensional arrays
      \\]
      \\s*
      (?:\\?)? # arrays can be nullable reference types
      \\s*
    )*
  )
))?\\s*
(?=\\()`,beginCaptures:{1:{name:"keyword.operator.expression.new.cs"},2:{patterns:[{include:"#type"}]}},end:"(?<=\\))",patterns:[{include:"#argument-list"}]},"object-creation-expression-with-no-parameters":{match:`(?x)
(new)\\s+
(?<type_name>
  (?:
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s* # array suffix?
      \\[
        (?:\\s*,\\s*)* # commata for multi-dimensional arrays
      \\]
      \\s*
      (?:\\?)? # arrays can be nullable reference types
      \\s*
    )*
  )
)\\s*
(?=\\{|//|/\\*|$)`,captures:{1:{name:"keyword.operator.expression.new.cs"},2:{patterns:[{include:"#type"}]}}},"array-creation-expression":{begin:`(?x)
\\b(new|stackalloc)\\b\\s*
(?<type_name>
  (?:
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s* # array suffix?
      \\[
        (?:\\s*,\\s*)* # commata for multi-dimensional arrays
      \\]
      \\s*
      (?:\\?)? # arrays can be nullable reference types
      \\s*
    )*
  )
)?\\s*
(?=\\[)`,beginCaptures:{1:{name:"keyword.operator.expression.$1.cs"},2:{patterns:[{include:"#type"}]}},end:"(?<=\\])",patterns:[{include:"#bracketed-argument-list"}]},"anonymous-object-creation-expression":{begin:"\\b(new)\\b\\s*(?=\\{|//|/\\*|$)",beginCaptures:{1:{name:"keyword.operator.expression.new.cs"}},end:"(?<=\\})",patterns:[{include:"#comment"},{include:"#initializer-expression"}]},"bracketed-parameter-list":{begin:"(?=(\\[))",beginCaptures:{1:{name:"punctuation.squarebracket.open.cs"}},end:"(?=(\\]))",endCaptures:{1:{name:"punctuation.squarebracket.close.cs"}},patterns:[{begin:"(?<=\\[)",end:"(?=\\])",patterns:[{include:"#comment"},{include:"#attribute-section"},{include:"#parameter"},{include:"#punctuation-comma"},{include:"#variable-initializer"}]}]},"parenthesized-parameter-list":{begin:"(\\()",beginCaptures:{0:{name:"punctuation.parenthesis.open.cs"}},end:"(\\))",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#comment"},{include:"#attribute-section"},{include:"#parameter"},{include:"#punctuation-comma"},{include:"#variable-initializer"}]},parameter:{match:`(?x)
(?:(?:\\b(ref|params|out|in|this)\\b)\\s+)?
(?<type_name>
  (?:
    (?:ref\\s+)?   # ref return
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
      (?<tuple>\\s*\\((?:[^()]|\\g<tuple>)+\\))
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s* # array suffix?
      \\[
        (?:\\s*,\\s*)* # commata for multi-dimensional arrays
      \\]
      \\s*
      (?:\\?)? # arrays can be nullable reference types
      \\s*
    )*
  )
)\\s+
(\\g<identifier>)`,captures:{1:{name:"storage.modifier.$1.cs"},2:{patterns:[{include:"#type"}]},7:{name:"entity.name.variable.parameter.cs"}}},"argument-list":{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#named-argument"},{include:"#argument"},{include:"#punctuation-comma"}]},"bracketed-argument-list":{begin:"\\[",beginCaptures:{0:{name:"punctuation.squarebracket.open.cs"}},end:"\\]",endCaptures:{0:{name:"punctuation.squarebracket.close.cs"}},patterns:[{include:"#named-argument"},{include:"#argument"},{include:"#punctuation-comma"}]},"named-argument":{begin:"(@?[_[:alpha:]][_[:alnum:]]*)\\s*(:)",beginCaptures:{1:{name:"entity.name.variable.parameter.cs"},2:{name:"punctuation.separator.colon.cs"}},end:"(?=(,|\\)|\\]))",patterns:[{include:"#argument"}]},argument:{patterns:[{name:"storage.modifier.$1.cs",match:"\\b(ref|in)\\b"},{begin:"\\b(out)\\b",beginCaptures:{1:{name:"storage.modifier.out.cs"}},end:"(?=,|\\)|\\])",patterns:[{include:"#declaration-expression-local"},{include:"#expression"}]},{include:"#expression"}]},"query-expression":{begin:`(?x)
\\b(from)\\b\\s*
(?<type_name>
  (?:
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s* # array suffix?
      \\[
        (?:\\s*,\\s*)* # commata for multi-dimensional arrays
      \\]
      \\s*
      (?:\\?)? # arrays can be nullable reference types
      \\s*
    )*
  )
)?
\\s+(\\g<identifier>)\\b\\s*
\\b(in)\\b\\s*`,beginCaptures:{1:{name:"keyword.operator.expression.query.from.cs"},2:{patterns:[{include:"#type"}]},7:{name:"entity.name.variable.range-variable.cs"},8:{name:"keyword.operator.expression.query.in.cs"}},end:"(?=;|\\))",patterns:[{include:"#query-body"},{include:"#expression"}]},"query-body":{patterns:[{include:"#let-clause"},{include:"#where-clause"},{include:"#join-clause"},{include:"#orderby-clause"},{include:"#select-clause"},{include:"#group-clause"}]},"let-clause":{begin:`(?x)
\\b(let)\\b\\s*
(@?[_[:alpha:]][_[:alnum:]]*)\\b\\s*
(=)\\s*`,beginCaptures:{1:{name:"keyword.operator.expression.query.let.cs"},2:{name:"entity.name.variable.range-variable.cs"},3:{name:"keyword.operator.assignment.cs"}},end:"(?=;|\\))",patterns:[{include:"#query-body"},{include:"#expression"}]},"where-clause":{begin:`(?x)
\\b(where)\\b\\s*`,beginCaptures:{1:{name:"keyword.operator.expression.query.where.cs"}},end:"(?=;|\\))",patterns:[{include:"#query-body"},{include:"#expression"}]},"join-clause":{begin:`(?x)
\\b(join)\\b\\s*
(?<type_name>
  (?:
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s* # array suffix?
      \\[
        (?:\\s*,\\s*)* # commata for multi-dimensional arrays
      \\]
      \\s*
      (?:\\?)? # arrays can be nullable reference types
      \\s*
    )*
  )
)?
\\s+(\\g<identifier>)\\b\\s*
\\b(in)\\b\\s*`,beginCaptures:{1:{name:"keyword.operator.expression.query.join.cs"},2:{patterns:[{include:"#type"}]},7:{name:"entity.name.variable.range-variable.cs"},8:{name:"keyword.operator.expression.query.in.cs"}},end:"(?=;|\\))",patterns:[{include:"#join-on"},{include:"#join-equals"},{include:"#join-into"},{include:"#query-body"},{include:"#expression"}]},"join-on":{match:"\\b(on)\\b\\s*",captures:{1:{name:"keyword.operator.expression.query.on.cs"}}},"join-equals":{match:"\\b(equals)\\b\\s*",captures:{1:{name:"keyword.operator.expression.query.equals.cs"}}},"join-into":{match:`(?x)
\\b(into)\\b\\s*
(@?[_[:alpha:]][_[:alnum:]]*)\\b\\s*`,captures:{1:{name:"keyword.operator.expression.query.into.cs"},2:{name:"entity.name.variable.range-variable.cs"}}},"orderby-clause":{begin:"\\b(orderby)\\b\\s*",beginCaptures:{1:{name:"keyword.operator.expression.query.orderby.cs"}},end:"(?=;|\\))",patterns:[{include:"#ordering-direction"},{include:"#query-body"},{include:"#expression"},{include:"#punctuation-comma"}]},"ordering-direction":{match:"\\b(ascending|descending)\\b",captures:{1:{name:"keyword.operator.expression.query.$1.cs"}}},"select-clause":{begin:"\\b(select)\\b\\s*",beginCaptures:{1:{name:"keyword.operator.expression.query.select.cs"}},end:"(?=;|\\))",patterns:[{include:"#query-body"},{include:"#expression"}]},"group-clause":{begin:"\\b(group)\\b\\s*",beginCaptures:{1:{name:"keyword.operator.expression.query.group.cs"}},end:"(?=;|\\))",patterns:[{include:"#group-by"},{include:"#group-into"},{include:"#query-body"},{include:"#expression"}]},"group-by":{match:"\\b(by)\\b\\s*",captures:{1:{name:"keyword.operator.expression.query.by.cs"}}},"group-into":{match:`(?x)
\\b(into)\\b\\s*
(@?[_[:alpha:]][_[:alnum:]]*)\\b\\s*`,captures:{1:{name:"keyword.operator.expression.query.into.cs"},2:{name:"entity.name.variable.range-variable.cs"}}},"anonymous-method-expression":{patterns:[{begin:`(?x)
((?:\\b(?:async|static)\\b\\s*)*)
(?:
  (@?[_[:alpha:]][_[:alnum:]]*)\\b|
  (\\()
    (?<tuple>(?:[^()]|\\(\\g<tuple>\\))*)
  (\\))
)\\s*
(=>)`,beginCaptures:{1:{patterns:[{match:"async|static",name:"storage.modifier.$0.cs"}]},2:{name:"entity.name.variable.parameter.cs"},3:{name:"punctuation.parenthesis.open.cs"},4:{patterns:[{include:"#comment"},{include:"#explicit-anonymous-function-parameter"},{include:"#implicit-anonymous-function-parameter"},{include:"#default-argument"},{include:"#punctuation-comma"}]},5:{name:"punctuation.parenthesis.close.cs"},6:{name:"keyword.operator.arrow.cs"}},end:"(?=[,;)}])",patterns:[{include:"#intrusive"},{begin:"(?={)",end:"(?=[,;)}])",patterns:[{include:"#block"},{include:"#intrusive"}]},{begin:"\\b(ref)\\b|(?=\\S)",beginCaptures:{1:{name:"storage.modifier.ref.cs"}},end:"(?=[,;)}])",patterns:[{include:"#expression"}]}]},{begin:`(?x)
((?:\\b(?:async|static)\\b\\s*)*)
\\b(delegate)\\b\\s*`,beginCaptures:{1:{patterns:[{match:"async|static",name:"storage.modifier.$0.cs"}]},2:{name:"storage.type.delegate.cs"}},end:"(?<=})|(?=[,;)}])",patterns:[{include:"#intrusive"},{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#intrusive"},{include:"#explicit-anonymous-function-parameter"},{include:"#punctuation-comma"}]},{include:"#block"}]}]},"explicit-anonymous-function-parameter":{match:`(?x)
(?:\\b(ref|params|out|in)\\b\\s*)?
(?<type_name>
  (?:
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args><(?:[^<>]|\\g<type_args>)*>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
      (?<tuple>\\s*\\((?:[^()]|\\g<tuple>)*\\))
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s* # array suffix?
      \\[
        (?:\\s*,\\s*)* # commata for multi-dimensional arrays
      \\]
      \\s*
      (?:\\?)? # arrays can be nullable reference types
      \\s*
    )*
  )
)\\s*
\\b(\\g<identifier>)\\b`,captures:{1:{name:"storage.modifier.$1.cs"},2:{patterns:[{include:"#type"}]},7:{name:"entity.name.variable.parameter.cs"}}},"implicit-anonymous-function-parameter":{match:"\\@?[_[:alpha:]][_[:alnum:]]*\\b",name:"entity.name.variable.parameter.cs"},"default-argument":{begin:"=",beginCaptures:{0:{name:"keyword.operator.assignment.cs"}},end:"(?=,|\\))",patterns:[{include:"#expression"}]},type:{patterns:[{include:"#comment"},{include:"#ref-modifier"},{include:"#readonly-modifier"},{include:"#tuple-type"},{include:"#type-builtin"},{include:"#type-name"},{include:"#type-arguments"},{include:"#type-array-suffix"},{include:"#type-nullable-suffix"},{include:"#type-pointer-suffix"}]},"ref-modifier":{name:"storage.modifier.ref.cs",match:"\\bref\\b"},"readonly-modifier":{name:"storage.modifier.readonly.cs",match:"\\breadonly\\b"},"tuple-type":{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#tuple-element"},{include:"#punctuation-comma"}]},"tuple-element":{match:`(?x)
(?<type_name>
  (?:
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s* # array suffix?
      \\[
        (?:\\s*,\\s*)* # commata for multi-dimensional arrays
      \\]
      \\s*
      (?:\\?)? # arrays can be nullable reference types
      \\s*
    )*
  )
)
(?:(?<tuple_name>\\g<identifier>)\\b)?`,captures:{1:{patterns:[{include:"#type"}]},6:{name:"entity.name.variable.tuple-element.cs"}}},"type-builtin":{match:"\\b(bool|s?byte|u?short|n?u?int|u?long|float|double|decimal|char|string|object|void|dynamic)\\b",captures:{1:{name:"keyword.type.$1.cs"}}},"type-name":{patterns:[{match:"(@?[_[:alpha:]][_[:alnum:]]*)\\s*(\\:\\:)",captures:{1:{name:"entity.name.type.alias.cs"},2:{name:"punctuation.separator.coloncolon.cs"}}},{match:"(@?[_[:alpha:]][_[:alnum:]]*)\\s*(\\.)",captures:{1:{name:"entity.name.type.cs"},2:{name:"punctuation.accessor.cs"}}},{match:"(\\.)\\s*(@?[_[:alpha:]][_[:alnum:]]*)",captures:{1:{name:"punctuation.accessor.cs"},2:{name:"entity.name.type.cs"}}},{name:"entity.name.type.cs",match:"@?[_[:alpha:]][_[:alnum:]]*"}]},"type-arguments":{begin:"<",beginCaptures:{0:{name:"punctuation.definition.typeparameters.begin.cs"}},end:">",endCaptures:{0:{name:"punctuation.definition.typeparameters.end.cs"}},patterns:[{include:"#type"},{include:"#punctuation-comma"}]},"type-array-suffix":{begin:"\\[",beginCaptures:{0:{name:"punctuation.squarebracket.open.cs"}},end:"\\]",endCaptures:{0:{name:"punctuation.squarebracket.close.cs"}},patterns:[{include:"#intrusive"},{include:"#punctuation-comma"}]},"type-nullable-suffix":{match:"\\?",name:"punctuation.separator.question-mark.cs"},"type-pointer-suffix":{match:"\\*",name:"punctuation.separator.asterisk.cs"},"operator-assignment":{name:"keyword.operator.assignment.cs",match:"(?<!=|!)(=)(?!=)"},"punctuation-comma":{name:"punctuation.separator.comma.cs",match:","},"punctuation-semicolon":{name:"punctuation.terminator.statement.cs",match:";"},"punctuation-accessor":{name:"punctuation.accessor.cs",match:"\\."},intrusive:{patterns:[{include:"#preprocessor"},{include:"#comment"}]},preprocessor:{name:"meta.preprocessor.cs",begin:"^\\s*(\\#)\\s*",beginCaptures:{1:{name:"punctuation.separator.hash.cs"}},end:"(?<=$)",patterns:[{include:"#comment"},{include:"#preprocessor-define-or-undef"},{include:"#preprocessor-if-or-elif"},{include:"#preprocessor-else-or-endif"},{include:"#preprocessor-warning-or-error"},{include:"#preprocessor-region"},{include:"#preprocessor-endregion"},{include:"#preprocessor-load"},{include:"#preprocessor-r"},{include:"#preprocessor-line"},{include:"#preprocessor-pragma-warning"},{include:"#preprocessor-pragma-checksum"}]},"preprocessor-define-or-undef":{match:"\\b(?:(define)|(undef))\\b\\s*\\b([_[:alpha:]][_[:alnum:]]*)\\b",captures:{1:{name:"keyword.preprocessor.define.cs"},2:{name:"keyword.preprocessor.undef.cs"},3:{name:"entity.name.variable.preprocessor.symbol.cs"}}},"preprocessor-if-or-elif":{begin:"\\b(?:(if)|(elif))\\b",beginCaptures:{1:{name:"keyword.preprocessor.if.cs"},2:{name:"keyword.preprocessor.elif.cs"}},end:"(?=$)",patterns:[{include:"#comment"},{include:"#preprocessor-expression"}]},"preprocessor-else-or-endif":{match:"\\b(?:(else)|(endif))\\b",captures:{1:{name:"keyword.preprocessor.else.cs"},2:{name:"keyword.preprocessor.endif.cs"}}},"preprocessor-warning-or-error":{match:"\\b(?:(warning)|(error))\\b\\s*(.*)(?=$)",captures:{1:{name:"keyword.preprocessor.warning.cs"},2:{name:"keyword.preprocessor.error.cs"},3:{name:"string.unquoted.preprocessor.message.cs"}}},"preprocessor-load":{begin:"\\b(load)\\b",beginCaptures:{1:{name:"keyword.preprocessor.load.cs"}},end:"(?=$)",patterns:[{match:'\\"[^"]*\\"',captures:{0:{name:"string.quoted.double.cs"}}}]},"preprocessor-r":{begin:"\\b(r)\\b",beginCaptures:{1:{name:"keyword.preprocessor.r.cs"}},end:"(?=$)",patterns:[{match:'\\"[^"]*\\"',captures:{0:{name:"string.quoted.double.cs"}}}]},"preprocessor-region":{match:"\\b(region)\\b\\s*(.*)(?=$)",captures:{1:{name:"keyword.preprocessor.region.cs"},2:{name:"string.unquoted.preprocessor.message.cs"}}},"preprocessor-endregion":{match:"\\b(endregion)\\b",captures:{1:{name:"keyword.preprocessor.endregion.cs"}}},"preprocessor-line":{begin:"\\b(line)\\b",beginCaptures:{1:{name:"keyword.preprocessor.line.cs"}},end:"(?=$)",patterns:[{match:"\\b(?:(default|hidden))",captures:{1:{name:"keyword.preprocessor.default.cs"},2:{name:"keyword.preprocessor.hidden.cs"}}},{match:"[0-9]+",captures:{0:{name:"constant.numeric.decimal.cs"}}},{match:'\\"[^"]*\\"',captures:{0:{name:"string.quoted.double.cs"}}}]},"preprocessor-pragma-warning":{match:"\\b(pragma)\\b\\s*\\b(warning)\\b\\s*\\b(?:(disable)|(restore))\\b(\\s*[0-9]+(?:\\s*,\\s*[0-9]+)?)?",captures:{1:{name:"keyword.preprocessor.pragma.cs"},2:{name:"keyword.preprocessor.warning.cs"},3:{name:"keyword.preprocessor.disable.cs"},4:{name:"keyword.preprocessor.restore.cs"},5:{patterns:[{match:"[0-9]+",captures:{0:{name:"constant.numeric.decimal.cs"}}},{include:"#punctuation-comma"}]}}},"preprocessor-pragma-checksum":{match:'\\b(pragma)\\b\\s*\\b(checksum)\\b\\s*(\\"[^"]*\\")\\s*(\\"[^"]*\\")\\s*(\\"[^"]*\\")',captures:{1:{name:"keyword.preprocessor.pragma.cs"},2:{name:"keyword.preprocessor.checksum.cs"},3:{name:"string.quoted.double.cs"},4:{name:"string.quoted.double.cs"},5:{name:"string.quoted.double.cs"}}},"preprocessor-expression":{patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#preprocessor-expression"}]},{match:"\\b(?:(true)|(false)|([_[:alpha:]][_[:alnum:]]*))\\b",captures:{1:{name:"constant.language.boolean.true.cs"},2:{name:"constant.language.boolean.false.cs"},3:{name:"entity.name.variable.preprocessor.symbol.cs"}}},{match:"(==|!=)|(\\!|&&|\\|\\|)",captures:{1:{name:"keyword.operator.comparison.cs"},2:{name:"keyword.operator.logical.cs"}}}]},comment:{patterns:[{name:"comment.block.documentation.cs",begin:"(^\\s+)?(///)(?!/)",while:"^(\\s*)(///)(?!/)",captures:{1:{name:"punctuation.whitespace.comment.leading.cs"},2:{name:"punctuation.definition.comment.cs"}},patterns:[{include:"#xml-doc-comment"}]},{name:"comment.block.documentation.cs",begin:"(^\\s+)?(/\\*\\*)(?!/)",end:"(^\\s+)?(\\*/)",captures:{1:{name:"punctuation.whitespace.comment.leading.cs"},2:{name:"punctuation.definition.comment.cs"}},patterns:[{begin:"\\G(?=(?~\\*/)$)",while:"^(\\s*+)(\\*(?!/))?(?=(?~\\*/)$)",whileCaptures:{1:{name:"punctuation.whitespace.comment.leading.cs"},2:{name:"punctuation.definition.comment.cs"}},patterns:[{include:"#xml-doc-comment"}]},{include:"#xml-doc-comment"}]},{name:"comment.line.double-slash.cs",begin:"(^\\s+)?(//).*$",while:"^(\\s*)(//).*$",captures:{1:{name:"punctuation.whitespace.comment.leading.cs"},2:{name:"punctuation.definition.comment.cs"}}},{name:"comment.block.cs",begin:"/\\*",end:"\\*/",captures:{0:{name:"punctuation.definition.comment.cs"}}}]},"xml-doc-comment":{patterns:[{include:"#xml-comment"},{include:"#xml-character-entity"},{include:"#xml-cdata"},{include:"#xml-tag"}]},"xml-tag":{name:"meta.tag.cs",begin:`(?x)
(</?)
(
  (?:
    ([-_[:alnum:]]+)
    (:)
  )?
  ([-_[:alnum:]]+)
)`,beginCaptures:{1:{name:"punctuation.definition.tag.cs"},2:{name:"entity.name.tag.cs"},3:{name:"entity.name.tag.namespace.cs"},4:{name:"punctuation.separator.colon.cs"},5:{name:"entity.name.tag.localname.cs"}},end:"(/?>)",endCaptures:{1:{name:"punctuation.definition.tag.cs"}},patterns:[{include:"#xml-attribute"}]},"xml-attribute":{patterns:[{match:`(?x)
(?:^|\\s+)
(
  (?:
    ([-_[:alnum:]]+)
    (:)
  )?
  ([-_[:alnum:]]+)
)
(=)`,captures:{1:{name:"entity.other.attribute-name.cs"},2:{name:"entity.other.attribute-name.namespace.cs"},3:{name:"punctuation.separator.colon.cs"},4:{name:"entity.other.attribute-name.localname.cs"},5:{name:"punctuation.separator.equals.cs"}}},{include:"#xml-string"}]},"xml-cdata":{name:"string.unquoted.cdata.cs",begin:"<!\\[CDATA\\[",beginCaptures:{0:{name:"punctuation.definition.string.begin.cs"}},end:"\\]\\]>",endCaptures:{0:{name:"punctuation.definition.string.end.cs"}}},"xml-string":{patterns:[{name:"string.quoted.single.cs",begin:"\\'",beginCaptures:{0:{name:"punctuation.definition.string.begin.cs"}},end:"\\'",endCaptures:{0:{name:"punctuation.definition.string.end.cs"}},patterns:[{include:"#xml-character-entity"}]},{name:"string.quoted.double.cs",begin:'\\"',beginCaptures:{0:{name:"punctuation.definition.string.begin.cs"}},end:'\\"',endCaptures:{0:{name:"punctuation.definition.string.end.cs"}},patterns:[{include:"#xml-character-entity"}]}]},"xml-character-entity":{patterns:[{name:"constant.character.entity.cs",match:`(?x)
(&)
(
  (?:[[:alpha:]:_][[:alnum:]:_.-]*)|
  (?:\\#[[:digit:]]+)|
  (?:\\#x[[:xdigit:]]+)
)
(;)`,captures:{1:{name:"punctuation.definition.constant.cs"},3:{name:"punctuation.definition.constant.cs"}}},{name:"invalid.illegal.bad-ampersand.cs",match:"&"}]},"xml-comment":{name:"comment.block.cs",begin:"<!--",beginCaptures:{0:{name:"punctuation.definition.comment.cs"}},end:"-->",endCaptures:{0:{name:"punctuation.definition.comment.cs"}}}},displayName:"C#",aliases:["c#","cs"]});var n=[e];export{n as default};
