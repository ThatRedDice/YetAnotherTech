declare module "java.time.chrono.Era" {
import {$TemporalAccessor$$Interface} from "java.time.temporal.TemporalAccessor"
import {$TextStyle$$Type} from "java.time.format.TextStyle"
import {$Locale$$Type} from "java.util.Locale"
import {$ValueRange} from "java.time.temporal.ValueRange"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$TemporalAdjuster$$Interface} from "java.time.temporal.TemporalAdjuster"
import {$TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$TemporalField$$Type} from "java.time.temporal.TemporalField"

export interface $Era$$Interface extends $TemporalAccessor$$Interface, $TemporalAdjuster$$Interface {

(): integer
get "value"(): integer
}

export class $Era implements $Era$$Interface {
 "adjustInto"(arg0: $Temporal$$Type): $Temporal
 "get"(arg0: $TemporalField$$Type): integer
 "getLong"(arg0: $TemporalField$$Type): long
 "getValue"(): integer
 "isSupported"(arg0: $TemporalField$$Type): boolean
 "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
 "range"(arg0: $TemporalField$$Type): $ValueRange
 "getDisplayName"(arg0: $TextStyle$$Type, arg1: $Locale$$Type): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Era$$Type = (() => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Era$$Original = $Era;}
declare module "java.time.chrono.ChronoZonedDateTime" {
import {$TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Comparator} from "java.util.Comparator"
import {$ZoneOffset} from "java.time.ZoneOffset"
import {$TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$Temporal, $Temporal$$Type, $Temporal$$Interface} from "java.time.temporal.Temporal"
import {$ChronoLocalDate} from "java.time.chrono.ChronoLocalDate"
import {$LocalTime} from "java.time.LocalTime"
import {$TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange} from "java.time.temporal.ValueRange"
import {$TemporalAdjuster$$Type} from "java.time.temporal.TemporalAdjuster"
import {$TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$Chronology} from "java.time.chrono.Chronology"
import {$ChronoLocalDateTime} from "java.time.chrono.ChronoLocalDateTime"
import {$Instant} from "java.time.Instant"

export interface $ChronoZonedDateTime$$Interface<D extends $ChronoLocalDate> extends $Temporal$$Interface, $Comparable$$Interface<($ChronoZonedDateTime<(never)>)> {
get "zone"(): $ZoneId
get "chronology"(): $Chronology
get "offset"(): $ZoneOffset
}

export class $ChronoZonedDateTime<D extends $ChronoLocalDate> implements $ChronoZonedDateTime$$Interface {
 "getZone"(): $ZoneId
 "toEpochSecond"(): long
 "toInstant"(): $Instant
 "isEqual"(arg0: $ChronoZonedDateTime$$Type<(never)>): boolean
 "minus"(arg0: long, arg1: $TemporalUnit$$Type): $ChronoZonedDateTime<(D)>
 "minus"(arg0: $TemporalAmount$$Type): $ChronoZonedDateTime<(D)>
 "isAfter"(arg0: $ChronoZonedDateTime$$Type<(never)>): boolean
 "isBefore"(arg0: $ChronoZonedDateTime$$Type<(never)>): boolean
 "getChronology"(): $Chronology
static "timeLineOrder"(): $Comparator<($ChronoZonedDateTime<(never)>)>
 "withZoneSameInstant"(arg0: $ZoneId$$Type): $ChronoZonedDateTime<(D)>
 "withZoneSameLocal"(arg0: $ZoneId$$Type): $ChronoZonedDateTime<(D)>
 "withLaterOffsetAtOverlap"(): $ChronoZonedDateTime<(D)>
 "get"(arg0: $TemporalField$$Type): integer
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "compareTo"(arg0: $ChronoZonedDateTime$$Type<(never)>): integer
 "compareTo"(arg0: any): integer
 "getLong"(arg0: $TemporalField$$Type): long
 "format"(arg0: $DateTimeFormatter$$Type): StringJS
static "from"(arg0: $TemporalAccessor$$Type): $ChronoZonedDateTime<(never)>
 "isSupported"(arg0: $TemporalField$$Type): boolean
 "isSupported"(arg0: $TemporalUnit$$Type): boolean
 "with"(arg0: $TemporalField$$Type, arg1: long): $ChronoZonedDateTime<(D)>
 "with"(arg0: $TemporalAdjuster$$Type): $ChronoZonedDateTime<(D)>
 "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
 "getOffset"(): $ZoneOffset
 "range"(arg0: $TemporalField$$Type): $ValueRange
 "plus"(arg0: long, arg1: $TemporalUnit$$Type): $ChronoZonedDateTime<(D)>
 "plus"(arg0: $TemporalAmount$$Type): $Temporal
 "toLocalDate"(): D
 "toLocalDateTime"(): $ChronoLocalDateTime<(D)>
 "toLocalTime"(): $LocalTime
 "withEarlierOffsetAtOverlap"(): $ChronoZonedDateTime<(D)>
 "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChronoZonedDateTime$$Type<D> = ($ChronoZonedDateTime<(D)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChronoZonedDateTime$$Original<D> = $ChronoZonedDateTime<(D)>;}
declare module "java.time.chrono.ChronoLocalDate" {
import {$Era} from "java.time.chrono.Era"
import {$TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Comparator} from "java.util.Comparator"
import {$TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$Temporal, $Temporal$$Type, $Temporal$$Interface} from "java.time.temporal.Temporal"
import {$LocalTime$$Type} from "java.time.LocalTime"
import {$ChronoPeriod} from "java.time.chrono.ChronoPeriod"
import {$TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange} from "java.time.temporal.ValueRange"
import {$TemporalAdjuster$$Type, $TemporalAdjuster$$Interface} from "java.time.temporal.TemporalAdjuster"
import {$TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$Chronology} from "java.time.chrono.Chronology"
import {$ChronoLocalDateTime} from "java.time.chrono.ChronoLocalDateTime"

export interface $ChronoLocalDate$$Interface extends $Temporal$$Interface, $TemporalAdjuster$$Interface, $Comparable$$Interface<($ChronoLocalDate)> {
get "era"(): $Era
get "leapYear"(): boolean
get "chronology"(): $Chronology
}

export class $ChronoLocalDate implements $ChronoLocalDate$$Interface {
 "getEra"(): $Era
 "isLeapYear"(): boolean
 "isEqual"(arg0: $ChronoLocalDate$$Type): boolean
 "lengthOfMonth"(): integer
 "toEpochDay"(): long
 "minus"(arg0: long, arg1: $TemporalUnit$$Type): $ChronoLocalDate
 "minus"(arg0: $TemporalAmount$$Type): $ChronoLocalDate
 "adjustInto"(arg0: $Temporal$$Type): $Temporal
 "isAfter"(arg0: $ChronoLocalDate$$Type): boolean
 "isBefore"(arg0: $ChronoLocalDate$$Type): boolean
 "getChronology"(): $Chronology
static "timeLineOrder"(): $Comparator<($ChronoLocalDate)>
 "lengthOfYear"(): integer
 "atTime"(arg0: $LocalTime$$Type): $ChronoLocalDateTime<(never)>
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "compareTo"(arg0: $ChronoLocalDate$$Type): integer
 "compareTo"(arg0: any): integer
 "format"(arg0: $DateTimeFormatter$$Type): StringJS
static "from"(arg0: $TemporalAccessor$$Type): $ChronoLocalDate
 "isSupported"(arg0: $TemporalField$$Type): boolean
 "isSupported"(arg0: $TemporalUnit$$Type): boolean
 "with"(arg0: $TemporalAdjuster$$Type): $Temporal
 "with"(arg0: $TemporalField$$Type, arg1: long): $ChronoLocalDate
 "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
 "plus"(arg0: $TemporalAmount$$Type): $ChronoLocalDate
 "plus"(arg0: long, arg1: $TemporalUnit$$Type): $ChronoLocalDate
 "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
 "until"(arg0: $ChronoLocalDate$$Type): $ChronoPeriod
 "get"(arg0: $TemporalField$$Type): integer
 "getLong"(arg0: $TemporalField$$Type): long
 "range"(arg0: $TemporalField$$Type): $ValueRange
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChronoLocalDate$$Type = ($ChronoLocalDate);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChronoLocalDate$$Original = $ChronoLocalDate;}
declare module "java.time.chrono.IsoChronology" {
import {$Era, $Era$$Type} from "java.time.chrono.Era"
import {$ChronoField$$Type} from "java.time.temporal.ChronoField"
import {$AbstractChronology} from "java.time.chrono.AbstractChronology"
import {$Map$$Type} from "java.util.Map"
import {$Clock$$Type} from "java.time.Clock"
import {$List} from "java.util.List"
import {$ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$ChronoZonedDateTime} from "java.time.chrono.ChronoZonedDateTime"
import {$Locale$$Type} from "java.util.Locale"
import {$ChronoLocalDate} from "java.time.chrono.ChronoLocalDate"
import {$TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$ResolverStyle$$Type} from "java.time.format.ResolverStyle"
import {$ZoneId$$Type} from "java.time.ZoneId"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$LocalDate} from "java.time.LocalDate"
import {$Set} from "java.util.Set"
import {$Period} from "java.time.Period"
import {$ValueRange} from "java.time.temporal.ValueRange"
import {$Chronology} from "java.time.chrono.Chronology"
import {$ChronoLocalDateTime} from "java.time.chrono.ChronoLocalDateTime"
import {$Instant$$Type} from "java.time.Instant"

export class $IsoChronology extends $AbstractChronology implements $Serializable$$Interface {
static readonly "INSTANCE": $IsoChronology

public "isLeapYear"(arg0: long): boolean
public "eras"(): $List<($Era)>
public "date"(arg0: $TemporalAccessor$$Type): $LocalDate
public "date"(arg0: $Era$$Type, arg1: integer, arg2: integer, arg3: integer): $ChronoLocalDate
public "date"(arg0: integer, arg1: integer, arg2: integer): $ChronoLocalDate
public "epochSecond"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: $ZoneOffset$$Type): long
public "prolepticYear"(arg0: $Era$$Type, arg1: integer): integer
public "dateYearDay"(arg0: $Era$$Type, arg1: integer, arg2: integer): $LocalDate
public "dateYearDay"(arg0: integer, arg1: integer): $ChronoLocalDate
public "dateNow"(arg0: $ZoneId$$Type): $ChronoLocalDate
public "dateNow"(): $ChronoLocalDate
public "dateNow"(arg0: $Clock$$Type): $ChronoLocalDate
public "resolveDate"(arg0: $Map$$Type<($TemporalField$$Type), (long)>, arg1: $ResolverStyle$$Type): $LocalDate
public "zonedDateTime"(arg0: $Instant$$Type, arg1: $ZoneId$$Type): $ChronoZonedDateTime
public "zonedDateTime"(arg0: $TemporalAccessor$$Type): $ChronoZonedDateTime
public "dateEpochDay"(arg0: long): $LocalDate
public "isIsoBased"(): boolean
public "getCalendarType"(): StringJS
public "localDateTime"(arg0: $TemporalAccessor$$Type): $ChronoLocalDateTime
public "eraOf"(arg0: integer): $Era
public "getId"(): StringJS
public "range"(arg0: $ChronoField$$Type): $ValueRange
public "period"(arg0: integer, arg1: integer, arg2: integer): $Period
public static "ofLocale"(arg0: $Locale$$Type): $Chronology
public static "getAvailableChronologies"(): $Set<($Chronology)>
public static "of"(arg0: StringJS): $Chronology
public static "from"(arg0: $TemporalAccessor$$Type): $Chronology
get "isoBased"(): boolean
get "calendarType"(): StringJS
get "id"(): StringJS
public static get "availableChronologies"(): $Set<($Chronology)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IsoChronology$$Type = ($IsoChronology);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IsoChronology$$Original = $IsoChronology;}
declare module "java.time.chrono.Chronology" {
import {$Era, $Era$$Type} from "java.time.chrono.Era"
import {$ChronoField$$Type} from "java.time.temporal.ChronoField"
import {$Map$$Type} from "java.util.Map"
import {$Clock$$Type} from "java.time.Clock"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$List} from "java.util.List"
import {$ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$TextStyle$$Type} from "java.time.format.TextStyle"
import {$ChronoZonedDateTime} from "java.time.chrono.ChronoZonedDateTime"
import {$Locale$$Type} from "java.util.Locale"
import {$ChronoLocalDate} from "java.time.chrono.ChronoLocalDate"
import {$ChronoPeriod} from "java.time.chrono.ChronoPeriod"
import {$TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$ResolverStyle$$Type} from "java.time.format.ResolverStyle"
import {$ZoneId$$Type} from "java.time.ZoneId"
import {$Set} from "java.util.Set"
import {$ValueRange} from "java.time.temporal.ValueRange"
import {$ChronoLocalDateTime} from "java.time.chrono.ChronoLocalDateTime"
import {$Instant$$Type} from "java.time.Instant"

export interface $Chronology$$Interface extends $Comparable$$Interface<($Chronology)> {
get "isoBased"(): boolean
public static get "availableChronologies"(): $Set<($Chronology)>
get "calendarType"(): StringJS
get "id"(): StringJS
}

export class $Chronology implements $Chronology$$Interface {
 "isLeapYear"(arg0: long): boolean
 "eras"(): $List<($Era)>
 "date"(arg0: $TemporalAccessor$$Type): $ChronoLocalDate
 "date"(arg0: integer, arg1: integer, arg2: integer): $ChronoLocalDate
 "date"(arg0: $Era$$Type, arg1: integer, arg2: integer, arg3: integer): $ChronoLocalDate
 "epochSecond"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: $ZoneOffset$$Type): long
 "epochSecond"(arg0: $Era$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: $ZoneOffset$$Type): long
 "prolepticYear"(arg0: $Era$$Type, arg1: integer): integer
 "dateYearDay"(arg0: integer, arg1: integer): $ChronoLocalDate
 "dateYearDay"(arg0: $Era$$Type, arg1: integer, arg2: integer): $ChronoLocalDate
 "dateNow"(arg0: $Clock$$Type): $ChronoLocalDate
 "dateNow"(arg0: $ZoneId$$Type): $ChronoLocalDate
 "dateNow"(): $ChronoLocalDate
 "resolveDate"(arg0: $Map$$Type<($TemporalField$$Type), (long)>, arg1: $ResolverStyle$$Type): $ChronoLocalDate
 "zonedDateTime"(arg0: $TemporalAccessor$$Type): $ChronoZonedDateTime<($ChronoLocalDate)>
 "zonedDateTime"(arg0: $Instant$$Type, arg1: $ZoneId$$Type): $ChronoZonedDateTime<($ChronoLocalDate)>
 "dateEpochDay"(arg0: long): $ChronoLocalDate
 "isIsoBased"(): boolean
static "ofLocale"(arg0: $Locale$$Type): $Chronology
static "getAvailableChronologies"(): $Set<($Chronology)>
 "getCalendarType"(): StringJS
 "localDateTime"(arg0: $TemporalAccessor$$Type): $ChronoLocalDateTime<($ChronoLocalDate)>
 "eraOf"(arg0: integer): $Era
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "compareTo"(arg0: $Chronology$$Type): integer
 "compareTo"(arg0: any): integer
static "of"(arg0: StringJS): $Chronology
static "from"(arg0: $TemporalAccessor$$Type): $Chronology
 "getId"(): StringJS
 "range"(arg0: $ChronoField$$Type): $ValueRange
 "getDisplayName"(arg0: $TextStyle$$Type, arg1: $Locale$$Type): StringJS
 "period"(arg0: integer, arg1: integer, arg2: integer): $ChronoPeriod
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Chronology$$Type = ($Chronology);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Chronology$$Original = $Chronology;}
declare module "java.time.chrono.ChronoLocalDateTime" {
import {$TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Comparator} from "java.util.Comparator"
import {$ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$ChronoZonedDateTime} from "java.time.chrono.ChronoZonedDateTime"
import {$Temporal, $Temporal$$Type, $Temporal$$Interface} from "java.time.temporal.Temporal"
import {$ChronoLocalDate} from "java.time.chrono.ChronoLocalDate"
import {$LocalTime} from "java.time.LocalTime"
import {$TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$ZoneId$$Type} from "java.time.ZoneId"
import {$DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange} from "java.time.temporal.ValueRange"
import {$TemporalAdjuster$$Type, $TemporalAdjuster$$Interface} from "java.time.temporal.TemporalAdjuster"
import {$TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$Chronology} from "java.time.chrono.Chronology"
import {$Instant} from "java.time.Instant"

export interface $ChronoLocalDateTime$$Interface<D extends $ChronoLocalDate> extends $Temporal$$Interface, $TemporalAdjuster$$Interface, $Comparable$$Interface<($ChronoLocalDateTime<(never)>)> {
get "chronology"(): $Chronology
}

export class $ChronoLocalDateTime<D extends $ChronoLocalDate> implements $ChronoLocalDateTime$$Interface {
 "toEpochSecond"(arg0: $ZoneOffset$$Type): long
 "toInstant"(arg0: $ZoneOffset$$Type): $Instant
 "isEqual"(arg0: $ChronoLocalDateTime$$Type<(never)>): boolean
 "minus"(arg0: long, arg1: $TemporalUnit$$Type): $ChronoLocalDateTime<(D)>
 "minus"(arg0: $TemporalAmount$$Type): $ChronoLocalDateTime<(D)>
 "adjustInto"(arg0: $Temporal$$Type): $Temporal
 "isAfter"(arg0: $ChronoLocalDateTime$$Type<(never)>): boolean
 "isBefore"(arg0: $ChronoLocalDateTime$$Type<(never)>): boolean
 "atZone"(arg0: $ZoneId$$Type): $ChronoZonedDateTime<(D)>
 "getChronology"(): $Chronology
static "timeLineOrder"(): $Comparator<($ChronoLocalDateTime<(never)>)>
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "compareTo"(arg0: $ChronoLocalDateTime$$Type<(never)>): integer
 "compareTo"(arg0: any): integer
 "format"(arg0: $DateTimeFormatter$$Type): StringJS
static "from"(arg0: $TemporalAccessor$$Type): $ChronoLocalDateTime<(never)>
 "isSupported"(arg0: $TemporalField$$Type): boolean
 "isSupported"(arg0: $TemporalUnit$$Type): boolean
 "with"(arg0: $TemporalField$$Type, arg1: long): $Temporal
 "with"(arg0: $TemporalAdjuster$$Type): $ChronoLocalDateTime<(D)>
 "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
 "plus"(arg0: long, arg1: $TemporalUnit$$Type): $ChronoLocalDateTime<(D)>
 "plus"(arg0: $TemporalAmount$$Type): $ChronoLocalDateTime<(D)>
 "toLocalDate"(): D
 "toLocalTime"(): $LocalTime
 "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
 "get"(arg0: $TemporalField$$Type): integer
 "getLong"(arg0: $TemporalField$$Type): long
 "range"(arg0: $TemporalField$$Type): $ValueRange
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChronoLocalDateTime$$Type<D> = ($ChronoLocalDateTime<(D)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChronoLocalDateTime$$Original<D> = $ChronoLocalDateTime<(D)>;}
declare module "java.time.chrono.ChronoPeriod" {
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$List} from "java.util.List"
import {$TemporalAmount$$Type, $TemporalAmount$$Interface} from "java.time.temporal.TemporalAmount"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$ChronoLocalDate$$Type} from "java.time.chrono.ChronoLocalDate"
import {$Chronology} from "java.time.chrono.Chronology"

export interface $ChronoPeriod$$Interface extends $TemporalAmount$$Interface {
get "negative"(): boolean
get "chronology"(): $Chronology
get "units"(): $List<($TemporalUnit)>
get "zero"(): boolean
}

export class $ChronoPeriod implements $ChronoPeriod$$Interface {
 "normalized"(): $ChronoPeriod
 "isNegative"(): boolean
 "minus"(arg0: $TemporalAmount$$Type): $ChronoPeriod
 "addTo"(arg0: $Temporal$$Type): $Temporal
 "subtractFrom"(arg0: $Temporal$$Type): $Temporal
 "getChronology"(): $Chronology
 "getUnits"(): $List<($TemporalUnit)>
 "negated"(): $ChronoPeriod
 "multipliedBy"(arg0: integer): $ChronoPeriod
 "get"(arg0: $TemporalUnit$$Type): long
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
static "between"(arg0: $ChronoLocalDate$$Type, arg1: $ChronoLocalDate$$Type): $ChronoPeriod
 "plus"(arg0: $TemporalAmount$$Type): $ChronoPeriod
 "isZero"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChronoPeriod$$Type = ($ChronoPeriod);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChronoPeriod$$Original = $ChronoPeriod;}
