declare module "io.redspace.ironsspellbooks.player.SpinAttackType" {
import {$Enum} from "java.lang.Enum"

export class $SpinAttackType extends $Enum<($SpinAttackType)> {
static readonly "RIPTIDE": $SpinAttackType
static readonly "FIRE": $SpinAttackType
static readonly "LIGHTNING": $SpinAttackType

public static "values"(): ($SpinAttackType)[]
public static "valueOf"(arg0: StringJS): $SpinAttackType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpinAttackType$$Type = (("fire") | ("lightning") | ("riptide"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpinAttackType$$Original = $SpinAttackType;}
