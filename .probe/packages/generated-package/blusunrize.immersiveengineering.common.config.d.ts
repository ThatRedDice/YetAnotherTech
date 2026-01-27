declare module "blusunrize.immersiveengineering.common.config.IEServerConfig$Ores$VeinType" {
import {$Enum} from "java.lang.Enum"
import {$EnumMetals} from "blusunrize.immersiveengineering.api.EnumMetals"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $IEServerConfig$Ores$VeinType extends $Enum<($IEServerConfig$Ores$VeinType)> {
static readonly "URANIUM": $IEServerConfig$Ores$VeinType
static readonly "CODEC": $MapCodec<($IEServerConfig$Ores$VeinType)>
static readonly "NICKEL": $IEServerConfig$Ores$VeinType
static readonly "DEEP_NICKEL": $IEServerConfig$Ores$VeinType
static readonly "BAUXITE": $IEServerConfig$Ores$VeinType
static readonly "SILVER": $IEServerConfig$Ores$VeinType
readonly "metal": $EnumMetals
static readonly "VALUES": ($IEServerConfig$Ores$VeinType)[]
static readonly "LEAD": $IEServerConfig$Ores$VeinType

public "getVeinName"(): StringJS
public static "values"(): ($IEServerConfig$Ores$VeinType)[]
public static "valueOf"(arg0: StringJS): $IEServerConfig$Ores$VeinType
get "veinName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEServerConfig$Ores$VeinType$$Type = (("bauxite") | ("lead") | ("silver") | ("nickel") | ("deep_nickel") | ("uranium"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEServerConfig$Ores$VeinType$$Original = $IEServerConfig$Ores$VeinType;}
