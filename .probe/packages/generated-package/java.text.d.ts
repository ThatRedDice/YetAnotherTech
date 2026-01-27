declare module "java.text.CharacterIterator" {
import {$Cloneable$$Interface} from "java.lang.Cloneable"

export interface $CharacterIterator$$Interface extends $Cloneable$$Interface {
get "beginIndex"(): integer
get "endIndex"(): integer
set "index"(value: integer)
get "index"(): integer
}

export class $CharacterIterator implements $CharacterIterator$$Interface {
static readonly "DONE": character

 "getBeginIndex"(): integer
 "getEndIndex"(): integer
 "setIndex"(arg0: integer): character
 "clone"(): any
 "next"(): character
 "last"(): character
 "first"(): character
 "current"(): character
 "getIndex"(): integer
 "previous"(): character
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CharacterIterator$$Type = ($CharacterIterator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CharacterIterator$$Original = $CharacterIterator;}
declare module "java.text.ParsePosition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ParsePosition {
constructor(arg0: integer)

public "getErrorIndex"(): integer
public "setIndex"(arg0: integer): void
public "setErrorIndex"(arg0: integer): void
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getIndex"(): integer
get "errorIndex"(): integer
set "index"(value: integer)
set "errorIndex"(value: integer)
get "index"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParsePosition$$Type = ($ParsePosition);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ParsePosition$$Original = $ParsePosition;}
declare module "java.text.DecimalFormat" {
import {$AttributedCharacterIterator} from "java.text.AttributedCharacterIterator"
import {$NumberFormat} from "java.text.NumberFormat"
import {$FieldPosition$$Type} from "java.text.FieldPosition"
import {$ParsePosition$$Type} from "java.text.ParsePosition"
import {$StringBuffer, $StringBuffer$$Type} from "java.lang.StringBuffer"
import {$Currency, $Currency$$Type} from "java.util.Currency"
import {$DecimalFormatSymbols, $DecimalFormatSymbols$$Type} from "java.text.DecimalFormatSymbols"
import {$RoundingMode, $RoundingMode$$Type} from "java.math.RoundingMode"

export class $DecimalFormat extends $NumberFormat {
static readonly "FRACTION_FIELD": integer
static readonly "INTEGER_FIELD": integer

constructor(arg0: StringJS)
constructor()
constructor(arg0: StringJS, arg1: $DecimalFormatSymbols$$Type)

public "getGroupingSize"(): integer
public "formatToCharacterIterator"(arg0: any): $AttributedCharacterIterator
public "setGroupingUsed"(arg0: boolean): void
public "getDecimalFormatSymbols"(): $DecimalFormatSymbols
public "setMinimumIntegerDigits"(arg0: integer): void
public "setMaximumIntegerDigits"(arg0: integer): void
public "toLocalizedPattern"(): StringJS
public "applyPattern"(arg0: StringJS): void
public "applyLocalizedPattern"(arg0: StringJS): void
public "isParseBigDecimal"(): boolean
public "setDecimalFormatSymbols"(arg0: $DecimalFormatSymbols$$Type): void
public "getPositivePrefix"(): StringJS
public "setPositivePrefix"(arg0: StringJS): void
public "getNegativePrefix"(): StringJS
public "setNegativePrefix"(arg0: StringJS): void
public "getPositiveSuffix"(): StringJS
public "setPositiveSuffix"(arg0: StringJS): void
public "getNegativeSuffix"(): StringJS
public "setNegativeSuffix"(arg0: StringJS): void
public "getMultiplier"(): integer
public "setMultiplier"(arg0: integer): void
public "setGroupingSize"(arg0: integer): void
public "isDecimalSeparatorAlwaysShown"(): boolean
public "setParseBigDecimal"(arg0: boolean): void
public "getMaximumIntegerDigits"(): integer
public "getMinimumIntegerDigits"(): integer
public "getMaximumFractionDigits"(): integer
public "setMaximumFractionDigits"(arg0: integer): void
public "getMinimumFractionDigits"(): integer
public "setMinimumFractionDigits"(arg0: integer): void
public "getCurrency"(): $Currency
public "setCurrency"(arg0: $Currency$$Type): void
public "setRoundingMode"(arg0: $RoundingMode$$Type): void
public "setDecimalSeparatorAlwaysShown"(arg0: boolean): void
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clone"(): any
public "format"(arg0: long, arg1: $StringBuffer$$Type, arg2: $FieldPosition$$Type): $StringBuffer
public "format"(arg0: double, arg1: $StringBuffer$$Type, arg2: $FieldPosition$$Type): $StringBuffer
public "format"(arg0: any, arg1: $StringBuffer$$Type, arg2: $FieldPosition$$Type): $StringBuffer
public "parse"(arg0: StringJS, arg1: $ParsePosition$$Type): number
public "getRoundingMode"(): $RoundingMode
public "toPattern"(): StringJS
get "groupingSize"(): integer
set "groupingUsed"(value: boolean)
get "decimalFormatSymbols"(): $DecimalFormatSymbols
set "minimumIntegerDigits"(value: integer)
set "maximumIntegerDigits"(value: integer)
get "parseBigDecimal"(): boolean
set "decimalFormatSymbols"(value: $DecimalFormatSymbols$$Type)
get "positivePrefix"(): StringJS
set "positivePrefix"(value: StringJS)
get "negativePrefix"(): StringJS
set "negativePrefix"(value: StringJS)
get "positiveSuffix"(): StringJS
set "positiveSuffix"(value: StringJS)
get "negativeSuffix"(): StringJS
set "negativeSuffix"(value: StringJS)
get "multiplier"(): integer
set "multiplier"(value: integer)
set "groupingSize"(value: integer)
get "decimalSeparatorAlwaysShown"(): boolean
set "parseBigDecimal"(value: boolean)
get "maximumIntegerDigits"(): integer
get "minimumIntegerDigits"(): integer
get "maximumFractionDigits"(): integer
set "maximumFractionDigits"(value: integer)
get "minimumFractionDigits"(): integer
set "minimumFractionDigits"(value: integer)
get "currency"(): $Currency
set "currency"(value: $Currency$$Type)
set "roundingMode"(value: $RoundingMode$$Type)
set "decimalSeparatorAlwaysShown"(value: boolean)
get "roundingMode"(): $RoundingMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DecimalFormat$$Type = ($DecimalFormat);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DecimalFormat$$Original = $DecimalFormat;}
declare module "java.text.AttributedCharacterIterator" {
import {$Map} from "java.util.Map"
import {$CharacterIterator$$Interface} from "java.text.CharacterIterator"
import {$Set, $Set$$Type} from "java.util.Set"
import {$AttributedCharacterIterator$Attribute, $AttributedCharacterIterator$Attribute$$Type} from "java.text.AttributedCharacterIterator$Attribute"

export interface $AttributedCharacterIterator$$Interface extends $CharacterIterator$$Interface {
get "runStart"(): integer
get "runLimit"(): integer
get "allAttributeKeys"(): $Set<($AttributedCharacterIterator$Attribute)>
get "attributes"(): $Map<($AttributedCharacterIterator$Attribute), (any)>
get "beginIndex"(): integer
get "endIndex"(): integer
set "index"(value: integer)
get "index"(): integer
}

export class $AttributedCharacterIterator implements $AttributedCharacterIterator$$Interface {
 "getRunStart"(arg0: $Set$$Type<($AttributedCharacterIterator$Attribute$$Type)>): integer
 "getRunStart"(arg0: $AttributedCharacterIterator$Attribute$$Type): integer
 "getRunStart"(): integer
 "getRunLimit"(arg0: $Set$$Type<($AttributedCharacterIterator$Attribute$$Type)>): integer
 "getRunLimit"(arg0: $AttributedCharacterIterator$Attribute$$Type): integer
 "getRunLimit"(): integer
 "getAllAttributeKeys"(): $Set<($AttributedCharacterIterator$Attribute)>
 "getAttribute"(arg0: $AttributedCharacterIterator$Attribute$$Type): any
 "getAttributes"(): $Map<($AttributedCharacterIterator$Attribute), (any)>
 "getBeginIndex"(): integer
 "getEndIndex"(): integer
 "setIndex"(arg0: integer): character
 "clone"(): any
 "next"(): character
 "last"(): character
 "first"(): character
 "current"(): character
 "getIndex"(): integer
 "previous"(): character
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttributedCharacterIterator$$Type = ($AttributedCharacterIterator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttributedCharacterIterator$$Original = $AttributedCharacterIterator;}
declare module "java.text.DateFormatSymbols" {
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$Locale, $Locale$$Type} from "java.util.Locale"

export class $DateFormatSymbols implements $Serializable$$Interface, $Cloneable$$Interface {
constructor(arg0: $Locale$$Type)
constructor()

public "getEras"(): (StringJS)[]
public "setEras"(arg0: (StringJS)[]): void
public "getMonths"(): (StringJS)[]
public "getShortMonths"(): (StringJS)[]
public "getWeekdays"(): (StringJS)[]
public "getShortWeekdays"(): (StringJS)[]
public "getAmPmStrings"(): (StringJS)[]
public "getLocalPatternChars"(): StringJS
public "getZoneStrings"(): ((StringJS)[])[]
public "setMonths"(arg0: (StringJS)[]): void
public "setShortMonths"(arg0: (StringJS)[]): void
public "setWeekdays"(arg0: (StringJS)[]): void
public "setShortWeekdays"(arg0: (StringJS)[]): void
public "setAmPmStrings"(arg0: (StringJS)[]): void
public "setZoneStrings"(arg0: ((StringJS)[])[]): void
public "setLocalPatternChars"(arg0: StringJS): void
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clone"(): any
public static "getInstance"(): $DateFormatSymbols
public static "getInstance"(arg0: $Locale$$Type): $DateFormatSymbols
public static "getAvailableLocales"(): ($Locale)[]
get "eras"(): (StringJS)[]
set "eras"(value: (StringJS)[])
get "months"(): (StringJS)[]
get "shortMonths"(): (StringJS)[]
get "weekdays"(): (StringJS)[]
get "shortWeekdays"(): (StringJS)[]
get "amPmStrings"(): (StringJS)[]
get "localPatternChars"(): StringJS
get "zoneStrings"(): ((StringJS)[])[]
set "months"(value: (StringJS)[])
set "shortMonths"(value: (StringJS)[])
set "weekdays"(value: (StringJS)[])
set "shortWeekdays"(value: (StringJS)[])
set "amPmStrings"(value: (StringJS)[])
set "zoneStrings"(value: ((StringJS)[])[])
set "localPatternChars"(value: StringJS)
public static get "instance"(): $DateFormatSymbols
public static get "availableLocales"(): ($Locale)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DateFormatSymbols$$Type = ($DateFormatSymbols);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DateFormatSymbols$$Original = $DateFormatSymbols;}
declare module "java.text.Format$Field" {
import {$AttributedCharacterIterator$Attribute} from "java.text.AttributedCharacterIterator$Attribute"

export class $Format$Field extends $AttributedCharacterIterator$Attribute {
static readonly "LANGUAGE": $AttributedCharacterIterator$Attribute
static readonly "INPUT_METHOD_SEGMENT": $AttributedCharacterIterator$Attribute
static readonly "READING": $AttributedCharacterIterator$Attribute

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Format$Field$$Type = ($Format$Field);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Format$Field$$Original = $Format$Field;}
declare module "java.text.NumberFormat$Style" {
import {$Enum} from "java.lang.Enum"

export class $NumberFormat$Style extends $Enum<($NumberFormat$Style)> {
static readonly "SHORT": $NumberFormat$Style
static readonly "LONG": $NumberFormat$Style

public static "values"(): ($NumberFormat$Style)[]
public static "valueOf"(arg0: StringJS): $NumberFormat$Style
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NumberFormat$Style$$Type = (("short") | ("long"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NumberFormat$Style$$Original = $NumberFormat$Style;}
declare module "java.text.FieldPosition" {
import {$Format$Field, $Format$Field$$Type} from "java.text.Format$Field"

export class $FieldPosition {
constructor(arg0: integer)
constructor(arg0: $Format$Field$$Type, arg1: integer)
constructor(arg0: $Format$Field$$Type)

public "setBeginIndex"(arg0: integer): void
public "setEndIndex"(arg0: integer): void
public "getFieldAttribute"(): $Format$Field
public "getBeginIndex"(): integer
public "getEndIndex"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getField"(): integer
set "beginIndex"(value: integer)
set "endIndex"(value: integer)
get "fieldAttribute"(): $Format$Field
get "beginIndex"(): integer
get "endIndex"(): integer
get "field"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FieldPosition$$Type = ($FieldPosition);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FieldPosition$$Original = $FieldPosition;}
declare module "java.text.NumberFormat" {
import {$FieldPosition$$Type} from "java.text.FieldPosition"
import {$ParsePosition$$Type} from "java.text.ParsePosition"
import {$StringBuffer, $StringBuffer$$Type} from "java.lang.StringBuffer"
import {$NumberFormat$Style$$Type} from "java.text.NumberFormat$Style"
import {$Locale, $Locale$$Type} from "java.util.Locale"
import {$Format} from "java.text.Format"
import {$Currency, $Currency$$Type} from "java.util.Currency"
import {$RoundingMode, $RoundingMode$$Type} from "java.math.RoundingMode"

export class $NumberFormat extends $Format {
static readonly "FRACTION_FIELD": integer
static readonly "INTEGER_FIELD": integer

public "parseObject"(arg0: StringJS, arg1: $ParsePosition$$Type): any
public static "getNumberInstance"(): $NumberFormat
public static "getNumberInstance"(arg0: $Locale$$Type): $NumberFormat
public "isGroupingUsed"(): boolean
public static "getIntegerInstance"(arg0: $Locale$$Type): $NumberFormat
public static "getIntegerInstance"(): $NumberFormat
public "setGroupingUsed"(arg0: boolean): void
public "setMinimumIntegerDigits"(arg0: integer): void
public "setMaximumIntegerDigits"(arg0: integer): void
public static "getCurrencyInstance"(): $NumberFormat
public static "getCurrencyInstance"(arg0: $Locale$$Type): $NumberFormat
public static "getPercentInstance"(): $NumberFormat
public static "getPercentInstance"(arg0: $Locale$$Type): $NumberFormat
public static "getCompactNumberInstance"(): $NumberFormat
public static "getCompactNumberInstance"(arg0: $Locale$$Type, arg1: $NumberFormat$Style$$Type): $NumberFormat
public "isParseIntegerOnly"(): boolean
public "setParseIntegerOnly"(arg0: boolean): void
public "getMaximumIntegerDigits"(): integer
public "getMinimumIntegerDigits"(): integer
public "getMaximumFractionDigits"(): integer
public "setMaximumFractionDigits"(arg0: integer): void
public "getMinimumFractionDigits"(): integer
public "setMinimumFractionDigits"(arg0: integer): void
public "getCurrency"(): $Currency
public "setCurrency"(arg0: $Currency$$Type): void
public "setRoundingMode"(arg0: $RoundingMode$$Type): void
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clone"(): any
public "format"(arg0: long, arg1: $StringBuffer$$Type, arg2: $FieldPosition$$Type): $StringBuffer
public "format"(arg0: double, arg1: $StringBuffer$$Type, arg2: $FieldPosition$$Type): $StringBuffer
public "format"(arg0: long): StringJS
public "format"(arg0: double): StringJS
public "format"(arg0: any, arg1: $StringBuffer$$Type, arg2: $FieldPosition$$Type): $StringBuffer
public static "getInstance"(): $NumberFormat
public static "getInstance"(arg0: $Locale$$Type): $NumberFormat
public "parse"(arg0: StringJS): number
public "parse"(arg0: StringJS, arg1: $ParsePosition$$Type): number
public static "getAvailableLocales"(): ($Locale)[]
public "getRoundingMode"(): $RoundingMode
public static get "numberInstance"(): $NumberFormat
get "groupingUsed"(): boolean
public static get "integerInstance"(): $NumberFormat
set "groupingUsed"(value: boolean)
set "minimumIntegerDigits"(value: integer)
set "maximumIntegerDigits"(value: integer)
public static get "currencyInstance"(): $NumberFormat
public static get "percentInstance"(): $NumberFormat
public static get "compactNumberInstance"(): $NumberFormat
get "parseIntegerOnly"(): boolean
set "parseIntegerOnly"(value: boolean)
get "maximumIntegerDigits"(): integer
get "minimumIntegerDigits"(): integer
get "maximumFractionDigits"(): integer
set "maximumFractionDigits"(value: integer)
get "minimumFractionDigits"(): integer
set "minimumFractionDigits"(value: integer)
get "currency"(): $Currency
set "currency"(value: $Currency$$Type)
set "roundingMode"(value: $RoundingMode$$Type)
public static get "instance"(): $NumberFormat
public static get "availableLocales"(): ($Locale)[]
get "roundingMode"(): $RoundingMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NumberFormat$$Type = ($NumberFormat);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NumberFormat$$Original = $NumberFormat;}
declare module "java.text.DecimalFormatSymbols" {
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$Locale, $Locale$$Type} from "java.util.Locale"
import {$Currency, $Currency$$Type} from "java.util.Currency"

export class $DecimalFormatSymbols implements $Cloneable$$Interface, $Serializable$$Interface {
constructor()
constructor(arg0: $Locale$$Type)

public "getLocale"(): $Locale
public "getDecimalSeparator"(): character
public "getGroupingSeparator"(): character
public "getZeroDigit"(): character
public "getMinusSign"(): character
public "getCurrency"(): $Currency
public "setCurrency"(arg0: $Currency$$Type): void
public "getInternationalCurrencySymbol"(): StringJS
public "getCurrencySymbol"(): StringJS
public "setZeroDigit"(arg0: character): void
public "setGroupingSeparator"(arg0: character): void
public "setDecimalSeparator"(arg0: character): void
public "getPerMill"(): character
public "setPerMill"(arg0: character): void
public "getPercent"(): character
public "setPercent"(arg0: character): void
public "getDigit"(): character
public "setDigit"(arg0: character): void
public "getPatternSeparator"(): character
public "setPatternSeparator"(arg0: character): void
public "getInfinity"(): StringJS
public "setInfinity"(arg0: StringJS): void
public "getNaN"(): StringJS
public "setNaN"(arg0: StringJS): void
public "setMinusSign"(arg0: character): void
public "setCurrencySymbol"(arg0: StringJS): void
public "setInternationalCurrencySymbol"(arg0: StringJS): void
public "getMonetaryDecimalSeparator"(): character
public "setMonetaryDecimalSeparator"(arg0: character): void
public "getExponentSeparator"(): StringJS
public "setExponentSeparator"(arg0: StringJS): void
public "getMonetaryGroupingSeparator"(): character
public "setMonetaryGroupingSeparator"(arg0: character): void
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clone"(): any
public static "getInstance"(arg0: $Locale$$Type): $DecimalFormatSymbols
public static "getInstance"(): $DecimalFormatSymbols
public static "getAvailableLocales"(): ($Locale)[]
get "locale"(): $Locale
get "decimalSeparator"(): character
get "groupingSeparator"(): character
get "zeroDigit"(): character
get "minusSign"(): character
get "currency"(): $Currency
set "currency"(value: $Currency$$Type)
get "internationalCurrencySymbol"(): StringJS
get "currencySymbol"(): StringJS
set "zeroDigit"(value: character)
set "groupingSeparator"(value: character)
set "decimalSeparator"(value: character)
get "perMill"(): character
set "perMill"(value: character)
get "percent"(): character
set "percent"(value: character)
get "digit"(): character
set "digit"(value: character)
get "patternSeparator"(): character
set "patternSeparator"(value: character)
get "infinity"(): StringJS
set "infinity"(value: StringJS)
get "naN"(): StringJS
set "naN"(value: StringJS)
set "minusSign"(value: character)
set "currencySymbol"(value: StringJS)
set "internationalCurrencySymbol"(value: StringJS)
get "monetaryDecimalSeparator"(): character
set "monetaryDecimalSeparator"(value: character)
get "exponentSeparator"(): StringJS
set "exponentSeparator"(value: StringJS)
get "monetaryGroupingSeparator"(): character
set "monetaryGroupingSeparator"(value: character)
public static get "instance"(): $DecimalFormatSymbols
public static get "availableLocales"(): ($Locale)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DecimalFormatSymbols$$Type = ($DecimalFormatSymbols);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DecimalFormatSymbols$$Original = $DecimalFormatSymbols;}
declare module "java.text.Format" {
import {$AttributedCharacterIterator} from "java.text.AttributedCharacterIterator"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$FieldPosition$$Type} from "java.text.FieldPosition"
import {$StringBuffer, $StringBuffer$$Type} from "java.lang.StringBuffer"
import {$ParsePosition$$Type} from "java.text.ParsePosition"
import {$Cloneable$$Interface} from "java.lang.Cloneable"

export class $Format implements $Serializable$$Interface, $Cloneable$$Interface {
public "parseObject"(arg0: StringJS, arg1: $ParsePosition$$Type): any
public "parseObject"(arg0: StringJS): any
public "formatToCharacterIterator"(arg0: any): $AttributedCharacterIterator
public "clone"(): any
public "format"(arg0: any): StringJS
public "format"(arg0: any, arg1: $StringBuffer$$Type, arg2: $FieldPosition$$Type): $StringBuffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Format$$Type = ($Format);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Format$$Original = $Format;}
declare module "java.text.DateFormat" {
import {$FieldPosition$$Type} from "java.text.FieldPosition"
import {$ParsePosition$$Type} from "java.text.ParsePosition"
import {$NumberFormat, $NumberFormat$$Type} from "java.text.NumberFormat"
import {$StringBuffer, $StringBuffer$$Type} from "java.lang.StringBuffer"
import {$TimeZone, $TimeZone$$Type} from "java.util.TimeZone"
import {$Date, $Date$$Type} from "java.util.Date"
import {$Locale, $Locale$$Type} from "java.util.Locale"
import {$Format} from "java.text.Format"
import {$Calendar, $Calendar$$Type} from "java.util.Calendar"

export class $DateFormat extends $Format {
static readonly "DAY_OF_YEAR_FIELD": integer
static readonly "DATE_FIELD": integer
static readonly "MILLISECOND_FIELD": integer
static readonly "MEDIUM": integer
static readonly "YEAR_FIELD": integer
static readonly "DAY_OF_WEEK_IN_MONTH_FIELD": integer
static readonly "MINUTE_FIELD": integer
static readonly "FULL": integer
static readonly "ERA_FIELD": integer
static readonly "AM_PM_FIELD": integer
static readonly "SHORT": integer
static readonly "HOUR_OF_DAY1_FIELD": integer
static readonly "MONTH_FIELD": integer
static readonly "DAY_OF_WEEK_FIELD": integer
static readonly "WEEK_OF_YEAR_FIELD": integer
static readonly "HOUR1_FIELD": integer
static readonly "HOUR_OF_DAY0_FIELD": integer
static readonly "WEEK_OF_MONTH_FIELD": integer
static readonly "TIMEZONE_FIELD": integer
static readonly "HOUR0_FIELD": integer
static readonly "DEFAULT": integer
static readonly "SECOND_FIELD": integer
static readonly "LONG": integer

public static "getDateTimeInstance"(): $DateFormat
public static "getDateTimeInstance"(arg0: integer, arg1: integer): $DateFormat
public static "getDateTimeInstance"(arg0: integer, arg1: integer, arg2: $Locale$$Type): $DateFormat
public "setLenient"(arg0: boolean): void
public static "getDateInstance"(arg0: integer): $DateFormat
public static "getDateInstance"(): $DateFormat
public static "getDateInstance"(arg0: integer, arg1: $Locale$$Type): $DateFormat
public static "getTimeInstance"(arg0: integer): $DateFormat
public static "getTimeInstance"(arg0: integer, arg1: $Locale$$Type): $DateFormat
public static "getTimeInstance"(): $DateFormat
public "parseObject"(arg0: StringJS, arg1: $ParsePosition$$Type): any
public "setCalendar"(arg0: $Calendar$$Type): void
public "getCalendar"(): $Calendar
public "setNumberFormat"(arg0: $NumberFormat$$Type): void
public "getNumberFormat"(): $NumberFormat
public "getTimeZone"(): $TimeZone
public "setTimeZone"(arg0: $TimeZone$$Type): void
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clone"(): any
public "format"(arg0: any, arg1: $StringBuffer$$Type, arg2: $FieldPosition$$Type): $StringBuffer
public "format"(arg0: $Date$$Type, arg1: $StringBuffer$$Type, arg2: $FieldPosition$$Type): $StringBuffer
public "format"(arg0: $Date$$Type): StringJS
public static "getInstance"(): $DateFormat
public "parse"(arg0: StringJS): $Date
public "parse"(arg0: StringJS, arg1: $ParsePosition$$Type): $Date
public static "getAvailableLocales"(): ($Locale)[]
public "isLenient"(): boolean
public static get "dateTimeInstance"(): $DateFormat
set "lenient"(value: boolean)
public static get "dateInstance"(): $DateFormat
public static get "timeInstance"(): $DateFormat
set "calendar"(value: $Calendar$$Type)
get "calendar"(): $Calendar
set "numberFormat"(value: $NumberFormat$$Type)
get "numberFormat"(): $NumberFormat
get "timeZone"(): $TimeZone
set "timeZone"(value: $TimeZone$$Type)
public static get "instance"(): $DateFormat
public static get "availableLocales"(): ($Locale)[]
get "lenient"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DateFormat$$Type = ($DateFormat);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DateFormat$$Original = $DateFormat;}
declare module "java.text.SimpleDateFormat" {
import {$AttributedCharacterIterator} from "java.text.AttributedCharacterIterator"
import {$DateFormatSymbols, $DateFormatSymbols$$Type} from "java.text.DateFormatSymbols"
import {$FieldPosition$$Type} from "java.text.FieldPosition"
import {$ParsePosition$$Type} from "java.text.ParsePosition"
import {$StringBuffer, $StringBuffer$$Type} from "java.lang.StringBuffer"
import {$Date, $Date$$Type} from "java.util.Date"
import {$Locale$$Type} from "java.util.Locale"
import {$DateFormat} from "java.text.DateFormat"

export class $SimpleDateFormat extends $DateFormat {
static readonly "DAY_OF_YEAR_FIELD": integer
static readonly "DATE_FIELD": integer
static readonly "MILLISECOND_FIELD": integer
static readonly "MEDIUM": integer
static readonly "YEAR_FIELD": integer
static readonly "DAY_OF_WEEK_IN_MONTH_FIELD": integer
static readonly "MINUTE_FIELD": integer
static readonly "FULL": integer
static readonly "ERA_FIELD": integer
static readonly "AM_PM_FIELD": integer
static readonly "SHORT": integer
static readonly "HOUR_OF_DAY1_FIELD": integer
static readonly "MONTH_FIELD": integer
static readonly "DAY_OF_WEEK_FIELD": integer
static readonly "WEEK_OF_YEAR_FIELD": integer
static readonly "HOUR1_FIELD": integer
static readonly "HOUR_OF_DAY0_FIELD": integer
static readonly "WEEK_OF_MONTH_FIELD": integer
static readonly "TIMEZONE_FIELD": integer
static readonly "HOUR0_FIELD": integer
static readonly "DEFAULT": integer
static readonly "SECOND_FIELD": integer
static readonly "LONG": integer

constructor(arg0: StringJS, arg1: $Locale$$Type)
constructor(arg0: StringJS)
constructor()
constructor(arg0: StringJS, arg1: $DateFormatSymbols$$Type)

public "formatToCharacterIterator"(arg0: any): $AttributedCharacterIterator
public "set2DigitYearStart"(arg0: $Date$$Type): void
public "get2DigitYearStart"(): $Date
public "toLocalizedPattern"(): StringJS
public "applyPattern"(arg0: StringJS): void
public "applyLocalizedPattern"(arg0: StringJS): void
public "getDateFormatSymbols"(): $DateFormatSymbols
public "setDateFormatSymbols"(arg0: $DateFormatSymbols$$Type): void
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clone"(): any
public "format"(arg0: $Date$$Type, arg1: $StringBuffer$$Type, arg2: $FieldPosition$$Type): $StringBuffer
public "parse"(arg0: StringJS, arg1: $ParsePosition$$Type): $Date
public "toPattern"(): StringJS
set "2DigitYearStart"(value: $Date$$Type)
get "2DigitYearStart"(): $Date
get "dateFormatSymbols"(): $DateFormatSymbols
set "dateFormatSymbols"(value: $DateFormatSymbols$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleDateFormat$$Type = ($SimpleDateFormat);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleDateFormat$$Original = $SimpleDateFormat;}
declare module "java.text.AttributedCharacterIterator$Attribute" {
import {$Serializable$$Interface} from "java.io.Serializable"

export class $AttributedCharacterIterator$Attribute implements $Serializable$$Interface {
static readonly "LANGUAGE": $AttributedCharacterIterator$Attribute
static readonly "INPUT_METHOD_SEGMENT": $AttributedCharacterIterator$Attribute
static readonly "READING": $AttributedCharacterIterator$Attribute

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttributedCharacterIterator$Attribute$$Type = ($AttributedCharacterIterator$Attribute);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttributedCharacterIterator$Attribute$$Original = $AttributedCharacterIterator$Attribute;}
