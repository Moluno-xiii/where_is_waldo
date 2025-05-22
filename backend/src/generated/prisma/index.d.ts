
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model players
 * 
 */
export type players = $Result.DefaultSelection<Prisma.$playersPayload>
/**
 * Model scores
 * 
 */
export type scores = $Result.DefaultSelection<Prisma.$scoresPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Players
 * const players = await prisma.players.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Players
   * const players = await prisma.players.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.players`: Exposes CRUD operations for the **players** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.players.findMany()
    * ```
    */
  get players(): Prisma.playersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scores`: Exposes CRUD operations for the **scores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scores
    * const scores = await prisma.scores.findMany()
    * ```
    */
  get scores(): Prisma.scoresDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    players: 'players',
    scores: 'scores'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "players" | "scores"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      players: {
        payload: Prisma.$playersPayload<ExtArgs>
        fields: Prisma.playersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.playersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.playersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playersPayload>
          }
          findFirst: {
            args: Prisma.playersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.playersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playersPayload>
          }
          findMany: {
            args: Prisma.playersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playersPayload>[]
          }
          create: {
            args: Prisma.playersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playersPayload>
          }
          createMany: {
            args: Prisma.playersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.playersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playersPayload>[]
          }
          delete: {
            args: Prisma.playersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playersPayload>
          }
          update: {
            args: Prisma.playersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playersPayload>
          }
          deleteMany: {
            args: Prisma.playersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.playersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.playersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playersPayload>[]
          }
          upsert: {
            args: Prisma.playersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playersPayload>
          }
          aggregate: {
            args: Prisma.PlayersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayers>
          }
          groupBy: {
            args: Prisma.playersGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayersGroupByOutputType>[]
          }
          count: {
            args: Prisma.playersCountArgs<ExtArgs>
            result: $Utils.Optional<PlayersCountAggregateOutputType> | number
          }
        }
      }
      scores: {
        payload: Prisma.$scoresPayload<ExtArgs>
        fields: Prisma.scoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.scoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.scoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scoresPayload>
          }
          findFirst: {
            args: Prisma.scoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.scoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scoresPayload>
          }
          findMany: {
            args: Prisma.scoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scoresPayload>[]
          }
          create: {
            args: Prisma.scoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scoresPayload>
          }
          createMany: {
            args: Prisma.scoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.scoresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scoresPayload>[]
          }
          delete: {
            args: Prisma.scoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scoresPayload>
          }
          update: {
            args: Prisma.scoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scoresPayload>
          }
          deleteMany: {
            args: Prisma.scoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.scoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.scoresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scoresPayload>[]
          }
          upsert: {
            args: Prisma.scoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scoresPayload>
          }
          aggregate: {
            args: Prisma.ScoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScores>
          }
          groupBy: {
            args: Prisma.scoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.scoresCountArgs<ExtArgs>
            result: $Utils.Optional<ScoresCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    players?: playersOmit
    scores?: scoresOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PlayersCountOutputType
   */

  export type PlayersCountOutputType = {
    scores: number
  }

  export type PlayersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scores?: boolean | PlayersCountOutputTypeCountScoresArgs
  }

  // Custom InputTypes
  /**
   * PlayersCountOutputType without action
   */
  export type PlayersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayersCountOutputType
     */
    select?: PlayersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlayersCountOutputType without action
   */
  export type PlayersCountOutputTypeCountScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: scoresWhereInput
  }


  /**
   * Models
   */

  /**
   * Model players
   */

  export type AggregatePlayers = {
    _count: PlayersCountAggregateOutputType | null
    _min: PlayersMinAggregateOutputType | null
    _max: PlayersMaxAggregateOutputType | null
  }

  export type PlayersMinAggregateOutputType = {
    id: string | null
    name: string | null
    date_added: Date | null
    date_updated: Date | null
  }

  export type PlayersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    date_added: Date | null
    date_updated: Date | null
  }

  export type PlayersCountAggregateOutputType = {
    id: number
    name: number
    date_added: number
    date_updated: number
    _all: number
  }


  export type PlayersMinAggregateInputType = {
    id?: true
    name?: true
    date_added?: true
    date_updated?: true
  }

  export type PlayersMaxAggregateInputType = {
    id?: true
    name?: true
    date_added?: true
    date_updated?: true
  }

  export type PlayersCountAggregateInputType = {
    id?: true
    name?: true
    date_added?: true
    date_updated?: true
    _all?: true
  }

  export type PlayersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which players to aggregate.
     */
    where?: playersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of players to fetch.
     */
    orderBy?: playersOrderByWithRelationInput | playersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: playersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned players
    **/
    _count?: true | PlayersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayersMaxAggregateInputType
  }

  export type GetPlayersAggregateType<T extends PlayersAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayers[P]>
      : GetScalarType<T[P], AggregatePlayers[P]>
  }




  export type playersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: playersWhereInput
    orderBy?: playersOrderByWithAggregationInput | playersOrderByWithAggregationInput[]
    by: PlayersScalarFieldEnum[] | PlayersScalarFieldEnum
    having?: playersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayersCountAggregateInputType | true
    _min?: PlayersMinAggregateInputType
    _max?: PlayersMaxAggregateInputType
  }

  export type PlayersGroupByOutputType = {
    id: string
    name: string
    date_added: Date
    date_updated: Date
    _count: PlayersCountAggregateOutputType | null
    _min: PlayersMinAggregateOutputType | null
    _max: PlayersMaxAggregateOutputType | null
  }

  type GetPlayersGroupByPayload<T extends playersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayersGroupByOutputType[P]>
            : GetScalarType<T[P], PlayersGroupByOutputType[P]>
        }
      >
    >


  export type playersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date_added?: boolean
    date_updated?: boolean
    scores?: boolean | players$scoresArgs<ExtArgs>
    _count?: boolean | PlayersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["players"]>

  export type playersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date_added?: boolean
    date_updated?: boolean
  }, ExtArgs["result"]["players"]>

  export type playersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date_added?: boolean
    date_updated?: boolean
  }, ExtArgs["result"]["players"]>

  export type playersSelectScalar = {
    id?: boolean
    name?: boolean
    date_added?: boolean
    date_updated?: boolean
  }

  export type playersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "date_added" | "date_updated", ExtArgs["result"]["players"]>
  export type playersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scores?: boolean | players$scoresArgs<ExtArgs>
    _count?: boolean | PlayersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type playersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type playersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $playersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "players"
    objects: {
      scores: Prisma.$scoresPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      date_added: Date
      date_updated: Date
    }, ExtArgs["result"]["players"]>
    composites: {}
  }

  type playersGetPayload<S extends boolean | null | undefined | playersDefaultArgs> = $Result.GetResult<Prisma.$playersPayload, S>

  type playersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<playersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayersCountAggregateInputType | true
    }

  export interface playersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['players'], meta: { name: 'players' } }
    /**
     * Find zero or one Players that matches the filter.
     * @param {playersFindUniqueArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends playersFindUniqueArgs>(args: SelectSubset<T, playersFindUniqueArgs<ExtArgs>>): Prisma__playersClient<$Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Players that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {playersFindUniqueOrThrowArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends playersFindUniqueOrThrowArgs>(args: SelectSubset<T, playersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__playersClient<$Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playersFindFirstArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends playersFindFirstArgs>(args?: SelectSubset<T, playersFindFirstArgs<ExtArgs>>): Prisma__playersClient<$Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Players that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playersFindFirstOrThrowArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends playersFindFirstOrThrowArgs>(args?: SelectSubset<T, playersFindFirstOrThrowArgs<ExtArgs>>): Prisma__playersClient<$Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.players.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.players.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playersWithIdOnly = await prisma.players.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends playersFindManyArgs>(args?: SelectSubset<T, playersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Players.
     * @param {playersCreateArgs} args - Arguments to create a Players.
     * @example
     * // Create one Players
     * const Players = await prisma.players.create({
     *   data: {
     *     // ... data to create a Players
     *   }
     * })
     * 
     */
    create<T extends playersCreateArgs>(args: SelectSubset<T, playersCreateArgs<ExtArgs>>): Prisma__playersClient<$Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Players.
     * @param {playersCreateManyArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const players = await prisma.players.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends playersCreateManyArgs>(args?: SelectSubset<T, playersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Players and returns the data saved in the database.
     * @param {playersCreateManyAndReturnArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const players = await prisma.players.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Players and only return the `id`
     * const playersWithIdOnly = await prisma.players.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends playersCreateManyAndReturnArgs>(args?: SelectSubset<T, playersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Players.
     * @param {playersDeleteArgs} args - Arguments to delete one Players.
     * @example
     * // Delete one Players
     * const Players = await prisma.players.delete({
     *   where: {
     *     // ... filter to delete one Players
     *   }
     * })
     * 
     */
    delete<T extends playersDeleteArgs>(args: SelectSubset<T, playersDeleteArgs<ExtArgs>>): Prisma__playersClient<$Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Players.
     * @param {playersUpdateArgs} args - Arguments to update one Players.
     * @example
     * // Update one Players
     * const players = await prisma.players.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends playersUpdateArgs>(args: SelectSubset<T, playersUpdateArgs<ExtArgs>>): Prisma__playersClient<$Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Players.
     * @param {playersDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.players.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends playersDeleteManyArgs>(args?: SelectSubset<T, playersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const players = await prisma.players.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends playersUpdateManyArgs>(args: SelectSubset<T, playersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players and returns the data updated in the database.
     * @param {playersUpdateManyAndReturnArgs} args - Arguments to update many Players.
     * @example
     * // Update many Players
     * const players = await prisma.players.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Players and only return the `id`
     * const playersWithIdOnly = await prisma.players.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends playersUpdateManyAndReturnArgs>(args: SelectSubset<T, playersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Players.
     * @param {playersUpsertArgs} args - Arguments to update or create a Players.
     * @example
     * // Update or create a Players
     * const players = await prisma.players.upsert({
     *   create: {
     *     // ... data to create a Players
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Players we want to update
     *   }
     * })
     */
    upsert<T extends playersUpsertArgs>(args: SelectSubset<T, playersUpsertArgs<ExtArgs>>): Prisma__playersClient<$Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playersCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.players.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends playersCountArgs>(
      args?: Subset<T, playersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayersAggregateArgs>(args: Subset<T, PlayersAggregateArgs>): Prisma.PrismaPromise<GetPlayersAggregateType<T>>

    /**
     * Group by Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends playersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: playersGroupByArgs['orderBy'] }
        : { orderBy?: playersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, playersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the players model
   */
  readonly fields: playersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for players.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__playersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scores<T extends players$scoresArgs<ExtArgs> = {}>(args?: Subset<T, players$scoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$scoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the players model
   */
  interface playersFieldRefs {
    readonly id: FieldRef<"players", 'String'>
    readonly name: FieldRef<"players", 'String'>
    readonly date_added: FieldRef<"players", 'DateTime'>
    readonly date_updated: FieldRef<"players", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * players findUnique
   */
  export type playersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the players
     */
    select?: playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the players
     */
    omit?: playersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playersInclude<ExtArgs> | null
    /**
     * Filter, which players to fetch.
     */
    where: playersWhereUniqueInput
  }

  /**
   * players findUniqueOrThrow
   */
  export type playersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the players
     */
    select?: playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the players
     */
    omit?: playersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playersInclude<ExtArgs> | null
    /**
     * Filter, which players to fetch.
     */
    where: playersWhereUniqueInput
  }

  /**
   * players findFirst
   */
  export type playersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the players
     */
    select?: playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the players
     */
    omit?: playersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playersInclude<ExtArgs> | null
    /**
     * Filter, which players to fetch.
     */
    where?: playersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of players to fetch.
     */
    orderBy?: playersOrderByWithRelationInput | playersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for players.
     */
    cursor?: playersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of players.
     */
    distinct?: PlayersScalarFieldEnum | PlayersScalarFieldEnum[]
  }

  /**
   * players findFirstOrThrow
   */
  export type playersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the players
     */
    select?: playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the players
     */
    omit?: playersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playersInclude<ExtArgs> | null
    /**
     * Filter, which players to fetch.
     */
    where?: playersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of players to fetch.
     */
    orderBy?: playersOrderByWithRelationInput | playersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for players.
     */
    cursor?: playersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of players.
     */
    distinct?: PlayersScalarFieldEnum | PlayersScalarFieldEnum[]
  }

  /**
   * players findMany
   */
  export type playersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the players
     */
    select?: playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the players
     */
    omit?: playersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playersInclude<ExtArgs> | null
    /**
     * Filter, which players to fetch.
     */
    where?: playersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of players to fetch.
     */
    orderBy?: playersOrderByWithRelationInput | playersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing players.
     */
    cursor?: playersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` players.
     */
    skip?: number
    distinct?: PlayersScalarFieldEnum | PlayersScalarFieldEnum[]
  }

  /**
   * players create
   */
  export type playersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the players
     */
    select?: playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the players
     */
    omit?: playersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playersInclude<ExtArgs> | null
    /**
     * The data needed to create a players.
     */
    data: XOR<playersCreateInput, playersUncheckedCreateInput>
  }

  /**
   * players createMany
   */
  export type playersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many players.
     */
    data: playersCreateManyInput | playersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * players createManyAndReturn
   */
  export type playersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the players
     */
    select?: playersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the players
     */
    omit?: playersOmit<ExtArgs> | null
    /**
     * The data used to create many players.
     */
    data: playersCreateManyInput | playersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * players update
   */
  export type playersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the players
     */
    select?: playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the players
     */
    omit?: playersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playersInclude<ExtArgs> | null
    /**
     * The data needed to update a players.
     */
    data: XOR<playersUpdateInput, playersUncheckedUpdateInput>
    /**
     * Choose, which players to update.
     */
    where: playersWhereUniqueInput
  }

  /**
   * players updateMany
   */
  export type playersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update players.
     */
    data: XOR<playersUpdateManyMutationInput, playersUncheckedUpdateManyInput>
    /**
     * Filter which players to update
     */
    where?: playersWhereInput
    /**
     * Limit how many players to update.
     */
    limit?: number
  }

  /**
   * players updateManyAndReturn
   */
  export type playersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the players
     */
    select?: playersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the players
     */
    omit?: playersOmit<ExtArgs> | null
    /**
     * The data used to update players.
     */
    data: XOR<playersUpdateManyMutationInput, playersUncheckedUpdateManyInput>
    /**
     * Filter which players to update
     */
    where?: playersWhereInput
    /**
     * Limit how many players to update.
     */
    limit?: number
  }

  /**
   * players upsert
   */
  export type playersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the players
     */
    select?: playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the players
     */
    omit?: playersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playersInclude<ExtArgs> | null
    /**
     * The filter to search for the players to update in case it exists.
     */
    where: playersWhereUniqueInput
    /**
     * In case the players found by the `where` argument doesn't exist, create a new players with this data.
     */
    create: XOR<playersCreateInput, playersUncheckedCreateInput>
    /**
     * In case the players was found with the provided `where` argument, update it with this data.
     */
    update: XOR<playersUpdateInput, playersUncheckedUpdateInput>
  }

  /**
   * players delete
   */
  export type playersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the players
     */
    select?: playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the players
     */
    omit?: playersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playersInclude<ExtArgs> | null
    /**
     * Filter which players to delete.
     */
    where: playersWhereUniqueInput
  }

  /**
   * players deleteMany
   */
  export type playersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which players to delete
     */
    where?: playersWhereInput
    /**
     * Limit how many players to delete.
     */
    limit?: number
  }

  /**
   * players.scores
   */
  export type players$scoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scores
     */
    select?: scoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scores
     */
    omit?: scoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scoresInclude<ExtArgs> | null
    where?: scoresWhereInput
    orderBy?: scoresOrderByWithRelationInput | scoresOrderByWithRelationInput[]
    cursor?: scoresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScoresScalarFieldEnum | ScoresScalarFieldEnum[]
  }

  /**
   * players without action
   */
  export type playersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the players
     */
    select?: playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the players
     */
    omit?: playersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playersInclude<ExtArgs> | null
  }


  /**
   * Model scores
   */

  export type AggregateScores = {
    _count: ScoresCountAggregateOutputType | null
    _avg: ScoresAvgAggregateOutputType | null
    _sum: ScoresSumAggregateOutputType | null
    _min: ScoresMinAggregateOutputType | null
    _max: ScoresMaxAggregateOutputType | null
  }

  export type ScoresAvgAggregateOutputType = {
    value: number | null
  }

  export type ScoresSumAggregateOutputType = {
    value: number | null
  }

  export type ScoresMinAggregateOutputType = {
    id: string | null
    date_added: Date | null
    value: number | null
    player_id: string | null
  }

  export type ScoresMaxAggregateOutputType = {
    id: string | null
    date_added: Date | null
    value: number | null
    player_id: string | null
  }

  export type ScoresCountAggregateOutputType = {
    id: number
    date_added: number
    value: number
    player_id: number
    _all: number
  }


  export type ScoresAvgAggregateInputType = {
    value?: true
  }

  export type ScoresSumAggregateInputType = {
    value?: true
  }

  export type ScoresMinAggregateInputType = {
    id?: true
    date_added?: true
    value?: true
    player_id?: true
  }

  export type ScoresMaxAggregateInputType = {
    id?: true
    date_added?: true
    value?: true
    player_id?: true
  }

  export type ScoresCountAggregateInputType = {
    id?: true
    date_added?: true
    value?: true
    player_id?: true
    _all?: true
  }

  export type ScoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which scores to aggregate.
     */
    where?: scoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of scores to fetch.
     */
    orderBy?: scoresOrderByWithRelationInput | scoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: scoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` scores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned scores
    **/
    _count?: true | ScoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScoresMaxAggregateInputType
  }

  export type GetScoresAggregateType<T extends ScoresAggregateArgs> = {
        [P in keyof T & keyof AggregateScores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScores[P]>
      : GetScalarType<T[P], AggregateScores[P]>
  }




  export type scoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: scoresWhereInput
    orderBy?: scoresOrderByWithAggregationInput | scoresOrderByWithAggregationInput[]
    by: ScoresScalarFieldEnum[] | ScoresScalarFieldEnum
    having?: scoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScoresCountAggregateInputType | true
    _avg?: ScoresAvgAggregateInputType
    _sum?: ScoresSumAggregateInputType
    _min?: ScoresMinAggregateInputType
    _max?: ScoresMaxAggregateInputType
  }

  export type ScoresGroupByOutputType = {
    id: string
    date_added: Date
    value: number
    player_id: string
    _count: ScoresCountAggregateOutputType | null
    _avg: ScoresAvgAggregateOutputType | null
    _sum: ScoresSumAggregateOutputType | null
    _min: ScoresMinAggregateOutputType | null
    _max: ScoresMaxAggregateOutputType | null
  }

  type GetScoresGroupByPayload<T extends scoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScoresGroupByOutputType[P]>
            : GetScalarType<T[P], ScoresGroupByOutputType[P]>
        }
      >
    >


  export type scoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date_added?: boolean
    value?: boolean
    player_id?: boolean
    player?: boolean | playersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scores"]>

  export type scoresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date_added?: boolean
    value?: boolean
    player_id?: boolean
    player?: boolean | playersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scores"]>

  export type scoresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date_added?: boolean
    value?: boolean
    player_id?: boolean
    player?: boolean | playersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scores"]>

  export type scoresSelectScalar = {
    id?: boolean
    date_added?: boolean
    value?: boolean
    player_id?: boolean
  }

  export type scoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date_added" | "value" | "player_id", ExtArgs["result"]["scores"]>
  export type scoresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | playersDefaultArgs<ExtArgs>
  }
  export type scoresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | playersDefaultArgs<ExtArgs>
  }
  export type scoresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | playersDefaultArgs<ExtArgs>
  }

  export type $scoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "scores"
    objects: {
      player: Prisma.$playersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date_added: Date
      value: number
      player_id: string
    }, ExtArgs["result"]["scores"]>
    composites: {}
  }

  type scoresGetPayload<S extends boolean | null | undefined | scoresDefaultArgs> = $Result.GetResult<Prisma.$scoresPayload, S>

  type scoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<scoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScoresCountAggregateInputType | true
    }

  export interface scoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['scores'], meta: { name: 'scores' } }
    /**
     * Find zero or one Scores that matches the filter.
     * @param {scoresFindUniqueArgs} args - Arguments to find a Scores
     * @example
     * // Get one Scores
     * const scores = await prisma.scores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends scoresFindUniqueArgs>(args: SelectSubset<T, scoresFindUniqueArgs<ExtArgs>>): Prisma__scoresClient<$Result.GetResult<Prisma.$scoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Scores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {scoresFindUniqueOrThrowArgs} args - Arguments to find a Scores
     * @example
     * // Get one Scores
     * const scores = await prisma.scores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends scoresFindUniqueOrThrowArgs>(args: SelectSubset<T, scoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__scoresClient<$Result.GetResult<Prisma.$scoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scoresFindFirstArgs} args - Arguments to find a Scores
     * @example
     * // Get one Scores
     * const scores = await prisma.scores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends scoresFindFirstArgs>(args?: SelectSubset<T, scoresFindFirstArgs<ExtArgs>>): Prisma__scoresClient<$Result.GetResult<Prisma.$scoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scoresFindFirstOrThrowArgs} args - Arguments to find a Scores
     * @example
     * // Get one Scores
     * const scores = await prisma.scores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends scoresFindFirstOrThrowArgs>(args?: SelectSubset<T, scoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__scoresClient<$Result.GetResult<Prisma.$scoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Scores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scores
     * const scores = await prisma.scores.findMany()
     * 
     * // Get first 10 Scores
     * const scores = await prisma.scores.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scoresWithIdOnly = await prisma.scores.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends scoresFindManyArgs>(args?: SelectSubset<T, scoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$scoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Scores.
     * @param {scoresCreateArgs} args - Arguments to create a Scores.
     * @example
     * // Create one Scores
     * const Scores = await prisma.scores.create({
     *   data: {
     *     // ... data to create a Scores
     *   }
     * })
     * 
     */
    create<T extends scoresCreateArgs>(args: SelectSubset<T, scoresCreateArgs<ExtArgs>>): Prisma__scoresClient<$Result.GetResult<Prisma.$scoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Scores.
     * @param {scoresCreateManyArgs} args - Arguments to create many Scores.
     * @example
     * // Create many Scores
     * const scores = await prisma.scores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends scoresCreateManyArgs>(args?: SelectSubset<T, scoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Scores and returns the data saved in the database.
     * @param {scoresCreateManyAndReturnArgs} args - Arguments to create many Scores.
     * @example
     * // Create many Scores
     * const scores = await prisma.scores.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Scores and only return the `id`
     * const scoresWithIdOnly = await prisma.scores.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends scoresCreateManyAndReturnArgs>(args?: SelectSubset<T, scoresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$scoresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Scores.
     * @param {scoresDeleteArgs} args - Arguments to delete one Scores.
     * @example
     * // Delete one Scores
     * const Scores = await prisma.scores.delete({
     *   where: {
     *     // ... filter to delete one Scores
     *   }
     * })
     * 
     */
    delete<T extends scoresDeleteArgs>(args: SelectSubset<T, scoresDeleteArgs<ExtArgs>>): Prisma__scoresClient<$Result.GetResult<Prisma.$scoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Scores.
     * @param {scoresUpdateArgs} args - Arguments to update one Scores.
     * @example
     * // Update one Scores
     * const scores = await prisma.scores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends scoresUpdateArgs>(args: SelectSubset<T, scoresUpdateArgs<ExtArgs>>): Prisma__scoresClient<$Result.GetResult<Prisma.$scoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Scores.
     * @param {scoresDeleteManyArgs} args - Arguments to filter Scores to delete.
     * @example
     * // Delete a few Scores
     * const { count } = await prisma.scores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends scoresDeleteManyArgs>(args?: SelectSubset<T, scoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scores
     * const scores = await prisma.scores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends scoresUpdateManyArgs>(args: SelectSubset<T, scoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scores and returns the data updated in the database.
     * @param {scoresUpdateManyAndReturnArgs} args - Arguments to update many Scores.
     * @example
     * // Update many Scores
     * const scores = await prisma.scores.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Scores and only return the `id`
     * const scoresWithIdOnly = await prisma.scores.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends scoresUpdateManyAndReturnArgs>(args: SelectSubset<T, scoresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$scoresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Scores.
     * @param {scoresUpsertArgs} args - Arguments to update or create a Scores.
     * @example
     * // Update or create a Scores
     * const scores = await prisma.scores.upsert({
     *   create: {
     *     // ... data to create a Scores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scores we want to update
     *   }
     * })
     */
    upsert<T extends scoresUpsertArgs>(args: SelectSubset<T, scoresUpsertArgs<ExtArgs>>): Prisma__scoresClient<$Result.GetResult<Prisma.$scoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Scores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scoresCountArgs} args - Arguments to filter Scores to count.
     * @example
     * // Count the number of Scores
     * const count = await prisma.scores.count({
     *   where: {
     *     // ... the filter for the Scores we want to count
     *   }
     * })
    **/
    count<T extends scoresCountArgs>(
      args?: Subset<T, scoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScoresAggregateArgs>(args: Subset<T, ScoresAggregateArgs>): Prisma.PrismaPromise<GetScoresAggregateType<T>>

    /**
     * Group by Scores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scoresGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends scoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: scoresGroupByArgs['orderBy'] }
        : { orderBy?: scoresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, scoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the scores model
   */
  readonly fields: scoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for scores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__scoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends playersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, playersDefaultArgs<ExtArgs>>): Prisma__playersClient<$Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the scores model
   */
  interface scoresFieldRefs {
    readonly id: FieldRef<"scores", 'String'>
    readonly date_added: FieldRef<"scores", 'DateTime'>
    readonly value: FieldRef<"scores", 'Int'>
    readonly player_id: FieldRef<"scores", 'String'>
  }
    

  // Custom InputTypes
  /**
   * scores findUnique
   */
  export type scoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scores
     */
    select?: scoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scores
     */
    omit?: scoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scoresInclude<ExtArgs> | null
    /**
     * Filter, which scores to fetch.
     */
    where: scoresWhereUniqueInput
  }

  /**
   * scores findUniqueOrThrow
   */
  export type scoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scores
     */
    select?: scoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scores
     */
    omit?: scoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scoresInclude<ExtArgs> | null
    /**
     * Filter, which scores to fetch.
     */
    where: scoresWhereUniqueInput
  }

  /**
   * scores findFirst
   */
  export type scoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scores
     */
    select?: scoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scores
     */
    omit?: scoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scoresInclude<ExtArgs> | null
    /**
     * Filter, which scores to fetch.
     */
    where?: scoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of scores to fetch.
     */
    orderBy?: scoresOrderByWithRelationInput | scoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for scores.
     */
    cursor?: scoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` scores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of scores.
     */
    distinct?: ScoresScalarFieldEnum | ScoresScalarFieldEnum[]
  }

  /**
   * scores findFirstOrThrow
   */
  export type scoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scores
     */
    select?: scoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scores
     */
    omit?: scoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scoresInclude<ExtArgs> | null
    /**
     * Filter, which scores to fetch.
     */
    where?: scoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of scores to fetch.
     */
    orderBy?: scoresOrderByWithRelationInput | scoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for scores.
     */
    cursor?: scoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` scores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of scores.
     */
    distinct?: ScoresScalarFieldEnum | ScoresScalarFieldEnum[]
  }

  /**
   * scores findMany
   */
  export type scoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scores
     */
    select?: scoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scores
     */
    omit?: scoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scoresInclude<ExtArgs> | null
    /**
     * Filter, which scores to fetch.
     */
    where?: scoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of scores to fetch.
     */
    orderBy?: scoresOrderByWithRelationInput | scoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing scores.
     */
    cursor?: scoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` scores.
     */
    skip?: number
    distinct?: ScoresScalarFieldEnum | ScoresScalarFieldEnum[]
  }

  /**
   * scores create
   */
  export type scoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scores
     */
    select?: scoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scores
     */
    omit?: scoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scoresInclude<ExtArgs> | null
    /**
     * The data needed to create a scores.
     */
    data: XOR<scoresCreateInput, scoresUncheckedCreateInput>
  }

  /**
   * scores createMany
   */
  export type scoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many scores.
     */
    data: scoresCreateManyInput | scoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * scores createManyAndReturn
   */
  export type scoresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scores
     */
    select?: scoresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the scores
     */
    omit?: scoresOmit<ExtArgs> | null
    /**
     * The data used to create many scores.
     */
    data: scoresCreateManyInput | scoresCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scoresIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * scores update
   */
  export type scoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scores
     */
    select?: scoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scores
     */
    omit?: scoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scoresInclude<ExtArgs> | null
    /**
     * The data needed to update a scores.
     */
    data: XOR<scoresUpdateInput, scoresUncheckedUpdateInput>
    /**
     * Choose, which scores to update.
     */
    where: scoresWhereUniqueInput
  }

  /**
   * scores updateMany
   */
  export type scoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update scores.
     */
    data: XOR<scoresUpdateManyMutationInput, scoresUncheckedUpdateManyInput>
    /**
     * Filter which scores to update
     */
    where?: scoresWhereInput
    /**
     * Limit how many scores to update.
     */
    limit?: number
  }

  /**
   * scores updateManyAndReturn
   */
  export type scoresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scores
     */
    select?: scoresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the scores
     */
    omit?: scoresOmit<ExtArgs> | null
    /**
     * The data used to update scores.
     */
    data: XOR<scoresUpdateManyMutationInput, scoresUncheckedUpdateManyInput>
    /**
     * Filter which scores to update
     */
    where?: scoresWhereInput
    /**
     * Limit how many scores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scoresIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * scores upsert
   */
  export type scoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scores
     */
    select?: scoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scores
     */
    omit?: scoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scoresInclude<ExtArgs> | null
    /**
     * The filter to search for the scores to update in case it exists.
     */
    where: scoresWhereUniqueInput
    /**
     * In case the scores found by the `where` argument doesn't exist, create a new scores with this data.
     */
    create: XOR<scoresCreateInput, scoresUncheckedCreateInput>
    /**
     * In case the scores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<scoresUpdateInput, scoresUncheckedUpdateInput>
  }

  /**
   * scores delete
   */
  export type scoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scores
     */
    select?: scoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scores
     */
    omit?: scoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scoresInclude<ExtArgs> | null
    /**
     * Filter which scores to delete.
     */
    where: scoresWhereUniqueInput
  }

  /**
   * scores deleteMany
   */
  export type scoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which scores to delete
     */
    where?: scoresWhereInput
    /**
     * Limit how many scores to delete.
     */
    limit?: number
  }

  /**
   * scores without action
   */
  export type scoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scores
     */
    select?: scoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scores
     */
    omit?: scoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scoresInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PlayersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    date_added: 'date_added',
    date_updated: 'date_updated'
  };

  export type PlayersScalarFieldEnum = (typeof PlayersScalarFieldEnum)[keyof typeof PlayersScalarFieldEnum]


  export const ScoresScalarFieldEnum: {
    id: 'id',
    date_added: 'date_added',
    value: 'value',
    player_id: 'player_id'
  };

  export type ScoresScalarFieldEnum = (typeof ScoresScalarFieldEnum)[keyof typeof ScoresScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type playersWhereInput = {
    AND?: playersWhereInput | playersWhereInput[]
    OR?: playersWhereInput[]
    NOT?: playersWhereInput | playersWhereInput[]
    id?: StringFilter<"players"> | string
    name?: StringFilter<"players"> | string
    date_added?: DateTimeFilter<"players"> | Date | string
    date_updated?: DateTimeFilter<"players"> | Date | string
    scores?: ScoresListRelationFilter
  }

  export type playersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    date_added?: SortOrder
    date_updated?: SortOrder
    scores?: scoresOrderByRelationAggregateInput
  }

  export type playersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: playersWhereInput | playersWhereInput[]
    OR?: playersWhereInput[]
    NOT?: playersWhereInput | playersWhereInput[]
    name?: StringFilter<"players"> | string
    date_added?: DateTimeFilter<"players"> | Date | string
    date_updated?: DateTimeFilter<"players"> | Date | string
    scores?: ScoresListRelationFilter
  }, "id">

  export type playersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    date_added?: SortOrder
    date_updated?: SortOrder
    _count?: playersCountOrderByAggregateInput
    _max?: playersMaxOrderByAggregateInput
    _min?: playersMinOrderByAggregateInput
  }

  export type playersScalarWhereWithAggregatesInput = {
    AND?: playersScalarWhereWithAggregatesInput | playersScalarWhereWithAggregatesInput[]
    OR?: playersScalarWhereWithAggregatesInput[]
    NOT?: playersScalarWhereWithAggregatesInput | playersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"players"> | string
    name?: StringWithAggregatesFilter<"players"> | string
    date_added?: DateTimeWithAggregatesFilter<"players"> | Date | string
    date_updated?: DateTimeWithAggregatesFilter<"players"> | Date | string
  }

  export type scoresWhereInput = {
    AND?: scoresWhereInput | scoresWhereInput[]
    OR?: scoresWhereInput[]
    NOT?: scoresWhereInput | scoresWhereInput[]
    id?: StringFilter<"scores"> | string
    date_added?: DateTimeFilter<"scores"> | Date | string
    value?: IntFilter<"scores"> | number
    player_id?: StringFilter<"scores"> | string
    player?: XOR<PlayersScalarRelationFilter, playersWhereInput>
  }

  export type scoresOrderByWithRelationInput = {
    id?: SortOrder
    date_added?: SortOrder
    value?: SortOrder
    player_id?: SortOrder
    player?: playersOrderByWithRelationInput
  }

  export type scoresWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: scoresWhereInput | scoresWhereInput[]
    OR?: scoresWhereInput[]
    NOT?: scoresWhereInput | scoresWhereInput[]
    date_added?: DateTimeFilter<"scores"> | Date | string
    value?: IntFilter<"scores"> | number
    player_id?: StringFilter<"scores"> | string
    player?: XOR<PlayersScalarRelationFilter, playersWhereInput>
  }, "id">

  export type scoresOrderByWithAggregationInput = {
    id?: SortOrder
    date_added?: SortOrder
    value?: SortOrder
    player_id?: SortOrder
    _count?: scoresCountOrderByAggregateInput
    _avg?: scoresAvgOrderByAggregateInput
    _max?: scoresMaxOrderByAggregateInput
    _min?: scoresMinOrderByAggregateInput
    _sum?: scoresSumOrderByAggregateInput
  }

  export type scoresScalarWhereWithAggregatesInput = {
    AND?: scoresScalarWhereWithAggregatesInput | scoresScalarWhereWithAggregatesInput[]
    OR?: scoresScalarWhereWithAggregatesInput[]
    NOT?: scoresScalarWhereWithAggregatesInput | scoresScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"scores"> | string
    date_added?: DateTimeWithAggregatesFilter<"scores"> | Date | string
    value?: IntWithAggregatesFilter<"scores"> | number
    player_id?: StringWithAggregatesFilter<"scores"> | string
  }

  export type playersCreateInput = {
    id?: string
    name: string
    date_added?: Date | string
    date_updated?: Date | string
    scores?: scoresCreateNestedManyWithoutPlayerInput
  }

  export type playersUncheckedCreateInput = {
    id?: string
    name: string
    date_added?: Date | string
    date_updated?: Date | string
    scores?: scoresUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type playersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date_added?: DateTimeFieldUpdateOperationsInput | Date | string
    date_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: scoresUpdateManyWithoutPlayerNestedInput
  }

  export type playersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date_added?: DateTimeFieldUpdateOperationsInput | Date | string
    date_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: scoresUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type playersCreateManyInput = {
    id?: string
    name: string
    date_added?: Date | string
    date_updated?: Date | string
  }

  export type playersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date_added?: DateTimeFieldUpdateOperationsInput | Date | string
    date_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type playersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date_added?: DateTimeFieldUpdateOperationsInput | Date | string
    date_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type scoresCreateInput = {
    id?: string
    date_added?: Date | string
    value: number
    player: playersCreateNestedOneWithoutScoresInput
  }

  export type scoresUncheckedCreateInput = {
    id?: string
    date_added?: Date | string
    value: number
    player_id: string
  }

  export type scoresUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date_added?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: IntFieldUpdateOperationsInput | number
    player?: playersUpdateOneRequiredWithoutScoresNestedInput
  }

  export type scoresUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date_added?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: IntFieldUpdateOperationsInput | number
    player_id?: StringFieldUpdateOperationsInput | string
  }

  export type scoresCreateManyInput = {
    id?: string
    date_added?: Date | string
    value: number
    player_id: string
  }

  export type scoresUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date_added?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type scoresUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date_added?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: IntFieldUpdateOperationsInput | number
    player_id?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ScoresListRelationFilter = {
    every?: scoresWhereInput
    some?: scoresWhereInput
    none?: scoresWhereInput
  }

  export type scoresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type playersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date_added?: SortOrder
    date_updated?: SortOrder
  }

  export type playersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date_added?: SortOrder
    date_updated?: SortOrder
  }

  export type playersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date_added?: SortOrder
    date_updated?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PlayersScalarRelationFilter = {
    is?: playersWhereInput
    isNot?: playersWhereInput
  }

  export type scoresCountOrderByAggregateInput = {
    id?: SortOrder
    date_added?: SortOrder
    value?: SortOrder
    player_id?: SortOrder
  }

  export type scoresAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type scoresMaxOrderByAggregateInput = {
    id?: SortOrder
    date_added?: SortOrder
    value?: SortOrder
    player_id?: SortOrder
  }

  export type scoresMinOrderByAggregateInput = {
    id?: SortOrder
    date_added?: SortOrder
    value?: SortOrder
    player_id?: SortOrder
  }

  export type scoresSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type scoresCreateNestedManyWithoutPlayerInput = {
    create?: XOR<scoresCreateWithoutPlayerInput, scoresUncheckedCreateWithoutPlayerInput> | scoresCreateWithoutPlayerInput[] | scoresUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: scoresCreateOrConnectWithoutPlayerInput | scoresCreateOrConnectWithoutPlayerInput[]
    createMany?: scoresCreateManyPlayerInputEnvelope
    connect?: scoresWhereUniqueInput | scoresWhereUniqueInput[]
  }

  export type scoresUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<scoresCreateWithoutPlayerInput, scoresUncheckedCreateWithoutPlayerInput> | scoresCreateWithoutPlayerInput[] | scoresUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: scoresCreateOrConnectWithoutPlayerInput | scoresCreateOrConnectWithoutPlayerInput[]
    createMany?: scoresCreateManyPlayerInputEnvelope
    connect?: scoresWhereUniqueInput | scoresWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type scoresUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<scoresCreateWithoutPlayerInput, scoresUncheckedCreateWithoutPlayerInput> | scoresCreateWithoutPlayerInput[] | scoresUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: scoresCreateOrConnectWithoutPlayerInput | scoresCreateOrConnectWithoutPlayerInput[]
    upsert?: scoresUpsertWithWhereUniqueWithoutPlayerInput | scoresUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: scoresCreateManyPlayerInputEnvelope
    set?: scoresWhereUniqueInput | scoresWhereUniqueInput[]
    disconnect?: scoresWhereUniqueInput | scoresWhereUniqueInput[]
    delete?: scoresWhereUniqueInput | scoresWhereUniqueInput[]
    connect?: scoresWhereUniqueInput | scoresWhereUniqueInput[]
    update?: scoresUpdateWithWhereUniqueWithoutPlayerInput | scoresUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: scoresUpdateManyWithWhereWithoutPlayerInput | scoresUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: scoresScalarWhereInput | scoresScalarWhereInput[]
  }

  export type scoresUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<scoresCreateWithoutPlayerInput, scoresUncheckedCreateWithoutPlayerInput> | scoresCreateWithoutPlayerInput[] | scoresUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: scoresCreateOrConnectWithoutPlayerInput | scoresCreateOrConnectWithoutPlayerInput[]
    upsert?: scoresUpsertWithWhereUniqueWithoutPlayerInput | scoresUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: scoresCreateManyPlayerInputEnvelope
    set?: scoresWhereUniqueInput | scoresWhereUniqueInput[]
    disconnect?: scoresWhereUniqueInput | scoresWhereUniqueInput[]
    delete?: scoresWhereUniqueInput | scoresWhereUniqueInput[]
    connect?: scoresWhereUniqueInput | scoresWhereUniqueInput[]
    update?: scoresUpdateWithWhereUniqueWithoutPlayerInput | scoresUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: scoresUpdateManyWithWhereWithoutPlayerInput | scoresUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: scoresScalarWhereInput | scoresScalarWhereInput[]
  }

  export type playersCreateNestedOneWithoutScoresInput = {
    create?: XOR<playersCreateWithoutScoresInput, playersUncheckedCreateWithoutScoresInput>
    connectOrCreate?: playersCreateOrConnectWithoutScoresInput
    connect?: playersWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type playersUpdateOneRequiredWithoutScoresNestedInput = {
    create?: XOR<playersCreateWithoutScoresInput, playersUncheckedCreateWithoutScoresInput>
    connectOrCreate?: playersCreateOrConnectWithoutScoresInput
    upsert?: playersUpsertWithoutScoresInput
    connect?: playersWhereUniqueInput
    update?: XOR<XOR<playersUpdateToOneWithWhereWithoutScoresInput, playersUpdateWithoutScoresInput>, playersUncheckedUpdateWithoutScoresInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type scoresCreateWithoutPlayerInput = {
    id?: string
    date_added?: Date | string
    value: number
  }

  export type scoresUncheckedCreateWithoutPlayerInput = {
    id?: string
    date_added?: Date | string
    value: number
  }

  export type scoresCreateOrConnectWithoutPlayerInput = {
    where: scoresWhereUniqueInput
    create: XOR<scoresCreateWithoutPlayerInput, scoresUncheckedCreateWithoutPlayerInput>
  }

  export type scoresCreateManyPlayerInputEnvelope = {
    data: scoresCreateManyPlayerInput | scoresCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type scoresUpsertWithWhereUniqueWithoutPlayerInput = {
    where: scoresWhereUniqueInput
    update: XOR<scoresUpdateWithoutPlayerInput, scoresUncheckedUpdateWithoutPlayerInput>
    create: XOR<scoresCreateWithoutPlayerInput, scoresUncheckedCreateWithoutPlayerInput>
  }

  export type scoresUpdateWithWhereUniqueWithoutPlayerInput = {
    where: scoresWhereUniqueInput
    data: XOR<scoresUpdateWithoutPlayerInput, scoresUncheckedUpdateWithoutPlayerInput>
  }

  export type scoresUpdateManyWithWhereWithoutPlayerInput = {
    where: scoresScalarWhereInput
    data: XOR<scoresUpdateManyMutationInput, scoresUncheckedUpdateManyWithoutPlayerInput>
  }

  export type scoresScalarWhereInput = {
    AND?: scoresScalarWhereInput | scoresScalarWhereInput[]
    OR?: scoresScalarWhereInput[]
    NOT?: scoresScalarWhereInput | scoresScalarWhereInput[]
    id?: StringFilter<"scores"> | string
    date_added?: DateTimeFilter<"scores"> | Date | string
    value?: IntFilter<"scores"> | number
    player_id?: StringFilter<"scores"> | string
  }

  export type playersCreateWithoutScoresInput = {
    id?: string
    name: string
    date_added?: Date | string
    date_updated?: Date | string
  }

  export type playersUncheckedCreateWithoutScoresInput = {
    id?: string
    name: string
    date_added?: Date | string
    date_updated?: Date | string
  }

  export type playersCreateOrConnectWithoutScoresInput = {
    where: playersWhereUniqueInput
    create: XOR<playersCreateWithoutScoresInput, playersUncheckedCreateWithoutScoresInput>
  }

  export type playersUpsertWithoutScoresInput = {
    update: XOR<playersUpdateWithoutScoresInput, playersUncheckedUpdateWithoutScoresInput>
    create: XOR<playersCreateWithoutScoresInput, playersUncheckedCreateWithoutScoresInput>
    where?: playersWhereInput
  }

  export type playersUpdateToOneWithWhereWithoutScoresInput = {
    where?: playersWhereInput
    data: XOR<playersUpdateWithoutScoresInput, playersUncheckedUpdateWithoutScoresInput>
  }

  export type playersUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date_added?: DateTimeFieldUpdateOperationsInput | Date | string
    date_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type playersUncheckedUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date_added?: DateTimeFieldUpdateOperationsInput | Date | string
    date_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type scoresCreateManyPlayerInput = {
    id?: string
    date_added?: Date | string
    value: number
  }

  export type scoresUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    date_added?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type scoresUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    date_added?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type scoresUncheckedUpdateManyWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    date_added?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}