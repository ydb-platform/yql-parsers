// Generated from YQL.g4 by ANTLR 4.13.1
package yql.antlr4.parser;
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link YQLParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface YQLVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link YQLParser#sql_query}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSql_query(YQLParser.Sql_queryContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#sql_stmt_list}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSql_stmt_list(YQLParser.Sql_stmt_listContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#ansi_sql_stmt_list}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAnsi_sql_stmt_list(YQLParser.Ansi_sql_stmt_listContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#lambda_body}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLambda_body(YQLParser.Lambda_bodyContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#lambda_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLambda_stmt(YQLParser.Lambda_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#sql_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSql_stmt(YQLParser.Sql_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#sql_stmt_core}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSql_stmt_core(YQLParser.Sql_stmt_coreContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpr(YQLParser.ExprContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#or_subexpr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOr_subexpr(YQLParser.Or_subexprContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#and_subexpr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAnd_subexpr(YQLParser.And_subexprContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#xor_subexpr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitXor_subexpr(YQLParser.Xor_subexprContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#distinct_from_op}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDistinct_from_op(YQLParser.Distinct_from_opContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#cond_expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCond_expr(YQLParser.Cond_exprContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#match_op}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMatch_op(YQLParser.Match_opContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#eq_subexpr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitEq_subexpr(YQLParser.Eq_subexprContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#shift_right}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitShift_right(YQLParser.Shift_rightContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#rot_right}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRot_right(YQLParser.Rot_rightContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#double_question}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDouble_question(YQLParser.Double_questionContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#neq_subexpr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNeq_subexpr(YQLParser.Neq_subexprContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#bit_subexpr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBit_subexpr(YQLParser.Bit_subexprContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#add_subexpr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAdd_subexpr(YQLParser.Add_subexprContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#mul_subexpr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMul_subexpr(YQLParser.Mul_subexprContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#con_subexpr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCon_subexpr(YQLParser.Con_subexprContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#unary_op}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUnary_op(YQLParser.Unary_opContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#unary_subexpr_suffix}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUnary_subexpr_suffix(YQLParser.Unary_subexpr_suffixContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#unary_casual_subexpr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUnary_casual_subexpr(YQLParser.Unary_casual_subexprContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#in_unary_casual_subexpr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIn_unary_casual_subexpr(YQLParser.In_unary_casual_subexprContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#unary_subexpr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUnary_subexpr(YQLParser.Unary_subexprContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#in_unary_subexpr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIn_unary_subexpr(YQLParser.In_unary_subexprContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#list_literal}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitList_literal(YQLParser.List_literalContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#expr_dict_list}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpr_dict_list(YQLParser.Expr_dict_listContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#dict_literal}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDict_literal(YQLParser.Dict_literalContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#expr_struct_list}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpr_struct_list(YQLParser.Expr_struct_listContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#struct_literal}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStruct_literal(YQLParser.Struct_literalContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#atom_expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAtom_expr(YQLParser.Atom_exprContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#in_atom_expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIn_atom_expr(YQLParser.In_atom_exprContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#cast_expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCast_expr(YQLParser.Cast_exprContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#bitcast_expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBitcast_expr(YQLParser.Bitcast_exprContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#exists_expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExists_expr(YQLParser.Exists_exprContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#case_expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCase_expr(YQLParser.Case_exprContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#lambda}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLambda(YQLParser.LambdaContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#in_expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIn_expr(YQLParser.In_exprContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#json_api_expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitJson_api_expr(YQLParser.Json_api_exprContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#jsonpath_spec}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitJsonpath_spec(YQLParser.Jsonpath_specContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#json_variable_name}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitJson_variable_name(YQLParser.Json_variable_nameContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#json_variable}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitJson_variable(YQLParser.Json_variableContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#json_variables}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitJson_variables(YQLParser.Json_variablesContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#json_common_args}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitJson_common_args(YQLParser.Json_common_argsContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#json_case_handler}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitJson_case_handler(YQLParser.Json_case_handlerContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#json_value}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitJson_value(YQLParser.Json_valueContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#json_exists_handler}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitJson_exists_handler(YQLParser.Json_exists_handlerContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#json_exists}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitJson_exists(YQLParser.Json_existsContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#json_query_wrapper}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitJson_query_wrapper(YQLParser.Json_query_wrapperContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#json_query_handler}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitJson_query_handler(YQLParser.Json_query_handlerContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#json_query}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitJson_query(YQLParser.Json_queryContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#smart_parenthesis}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSmart_parenthesis(YQLParser.Smart_parenthesisContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#expr_list}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpr_list(YQLParser.Expr_listContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#pure_column_list}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPure_column_list(YQLParser.Pure_column_listContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#pure_column_or_named}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPure_column_or_named(YQLParser.Pure_column_or_namedContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#pure_column_or_named_list}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPure_column_or_named_list(YQLParser.Pure_column_or_named_listContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#column_name}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitColumn_name(YQLParser.Column_nameContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#without_column_name}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWithout_column_name(YQLParser.Without_column_nameContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#column_list}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitColumn_list(YQLParser.Column_listContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#without_column_list}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWithout_column_list(YQLParser.Without_column_listContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#named_expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNamed_expr(YQLParser.Named_exprContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#named_expr_list}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNamed_expr_list(YQLParser.Named_expr_listContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#invoke_expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInvoke_expr(YQLParser.Invoke_exprContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#invoke_expr_tail}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInvoke_expr_tail(YQLParser.Invoke_expr_tailContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#using_call_expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUsing_call_expr(YQLParser.Using_call_exprContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#key_expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitKey_expr(YQLParser.Key_exprContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#when_expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWhen_expr(YQLParser.When_exprContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#literal_value}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLiteral_value(YQLParser.Literal_valueContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#bind_parameter}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBind_parameter(YQLParser.Bind_parameterContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#opt_bind_parameter}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOpt_bind_parameter(YQLParser.Opt_bind_parameterContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#bind_parameter_list}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBind_parameter_list(YQLParser.Bind_parameter_listContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#named_bind_parameter}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNamed_bind_parameter(YQLParser.Named_bind_parameterContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#named_bind_parameter_list}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNamed_bind_parameter_list(YQLParser.Named_bind_parameter_listContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#signed_number}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSigned_number(YQLParser.Signed_numberContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#type_name_simple}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitType_name_simple(YQLParser.Type_name_simpleContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#integer_or_bind}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInteger_or_bind(YQLParser.Integer_or_bindContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#type_name_tag}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitType_name_tag(YQLParser.Type_name_tagContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#struct_arg}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStruct_arg(YQLParser.Struct_argContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#struct_arg_positional}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStruct_arg_positional(YQLParser.Struct_arg_positionalContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#variant_arg}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitVariant_arg(YQLParser.Variant_argContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#callable_arg}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCallable_arg(YQLParser.Callable_argContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#callable_arg_list}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCallable_arg_list(YQLParser.Callable_arg_listContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#type_name_decimal}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitType_name_decimal(YQLParser.Type_name_decimalContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#type_name_optional}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitType_name_optional(YQLParser.Type_name_optionalContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#type_name_tuple}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitType_name_tuple(YQLParser.Type_name_tupleContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#type_name_struct}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitType_name_struct(YQLParser.Type_name_structContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#type_name_variant}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitType_name_variant(YQLParser.Type_name_variantContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#type_name_list}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitType_name_list(YQLParser.Type_name_listContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#type_name_stream}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitType_name_stream(YQLParser.Type_name_streamContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#type_name_flow}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitType_name_flow(YQLParser.Type_name_flowContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#type_name_dict}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitType_name_dict(YQLParser.Type_name_dictContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#type_name_set}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitType_name_set(YQLParser.Type_name_setContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#type_name_enum}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitType_name_enum(YQLParser.Type_name_enumContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#type_name_resource}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitType_name_resource(YQLParser.Type_name_resourceContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#type_name_tagged}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitType_name_tagged(YQLParser.Type_name_taggedContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#type_name_callable}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitType_name_callable(YQLParser.Type_name_callableContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#type_name_composite}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitType_name_composite(YQLParser.Type_name_compositeContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#type_name}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitType_name(YQLParser.Type_nameContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#type_name_or_bind}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitType_name_or_bind(YQLParser.Type_name_or_bindContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#value_constructor_literal}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitValue_constructor_literal(YQLParser.Value_constructor_literalContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#value_constructor}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitValue_constructor(YQLParser.Value_constructorContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#declare_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDeclare_stmt(YQLParser.Declare_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#module_path}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitModule_path(YQLParser.Module_pathContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#import_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitImport_stmt(YQLParser.Import_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#export_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExport_stmt(YQLParser.Export_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#call_action}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCall_action(YQLParser.Call_actionContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#inline_action}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInline_action(YQLParser.Inline_actionContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#do_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDo_stmt(YQLParser.Do_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#pragma_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPragma_stmt(YQLParser.Pragma_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#pragma_value}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPragma_value(YQLParser.Pragma_valueContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#sort_specification}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSort_specification(YQLParser.Sort_specificationContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#sort_specification_list}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSort_specification_list(YQLParser.Sort_specification_listContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#select_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSelect_stmt(YQLParser.Select_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#select_unparenthesized_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSelect_unparenthesized_stmt(YQLParser.Select_unparenthesized_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#select_kind_parenthesis}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSelect_kind_parenthesis(YQLParser.Select_kind_parenthesisContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#select_op}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSelect_op(YQLParser.Select_opContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#select_kind_partial}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSelect_kind_partial(YQLParser.Select_kind_partialContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#select_kind}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSelect_kind(YQLParser.Select_kindContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#process_core}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitProcess_core(YQLParser.Process_coreContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#external_call_param}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExternal_call_param(YQLParser.External_call_paramContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#external_call_settings}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExternal_call_settings(YQLParser.External_call_settingsContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#reduce_core}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitReduce_core(YQLParser.Reduce_coreContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#opt_set_quantifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOpt_set_quantifier(YQLParser.Opt_set_quantifierContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#select_core}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSelect_core(YQLParser.Select_coreContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#row_pattern_recognition_clause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRow_pattern_recognition_clause(YQLParser.Row_pattern_recognition_clauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#row_pattern_rows_per_match}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRow_pattern_rows_per_match(YQLParser.Row_pattern_rows_per_matchContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#row_pattern_empty_match_handling}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRow_pattern_empty_match_handling(YQLParser.Row_pattern_empty_match_handlingContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#row_pattern_measures}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRow_pattern_measures(YQLParser.Row_pattern_measuresContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#row_pattern_measure_list}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRow_pattern_measure_list(YQLParser.Row_pattern_measure_listContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#row_pattern_measure_definition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRow_pattern_measure_definition(YQLParser.Row_pattern_measure_definitionContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#row_pattern_common_syntax}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRow_pattern_common_syntax(YQLParser.Row_pattern_common_syntaxContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#row_pattern_skip_to}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRow_pattern_skip_to(YQLParser.Row_pattern_skip_toContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#row_pattern_skip_to_variable_name}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRow_pattern_skip_to_variable_name(YQLParser.Row_pattern_skip_to_variable_nameContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#row_pattern_initial_or_seek}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRow_pattern_initial_or_seek(YQLParser.Row_pattern_initial_or_seekContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#row_pattern}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRow_pattern(YQLParser.Row_patternContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#row_pattern_term}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRow_pattern_term(YQLParser.Row_pattern_termContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#row_pattern_factor}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRow_pattern_factor(YQLParser.Row_pattern_factorContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#row_pattern_quantifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRow_pattern_quantifier(YQLParser.Row_pattern_quantifierContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#row_pattern_primary}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRow_pattern_primary(YQLParser.Row_pattern_primaryContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#row_pattern_primary_variable_name}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRow_pattern_primary_variable_name(YQLParser.Row_pattern_primary_variable_nameContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#row_pattern_permute}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRow_pattern_permute(YQLParser.Row_pattern_permuteContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#row_pattern_subset_clause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRow_pattern_subset_clause(YQLParser.Row_pattern_subset_clauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#row_pattern_subset_list}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRow_pattern_subset_list(YQLParser.Row_pattern_subset_listContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#row_pattern_subset_item}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRow_pattern_subset_item(YQLParser.Row_pattern_subset_itemContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#row_pattern_subset_item_variable_name}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRow_pattern_subset_item_variable_name(YQLParser.Row_pattern_subset_item_variable_nameContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#row_pattern_subset_rhs}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRow_pattern_subset_rhs(YQLParser.Row_pattern_subset_rhsContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#row_pattern_subset_rhs_variable_name}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRow_pattern_subset_rhs_variable_name(YQLParser.Row_pattern_subset_rhs_variable_nameContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#row_pattern_definition_list}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRow_pattern_definition_list(YQLParser.Row_pattern_definition_listContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#row_pattern_definition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRow_pattern_definition(YQLParser.Row_pattern_definitionContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#row_pattern_definition_variable_name}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRow_pattern_definition_variable_name(YQLParser.Row_pattern_definition_variable_nameContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#row_pattern_definition_search_condition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRow_pattern_definition_search_condition(YQLParser.Row_pattern_definition_search_conditionContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#search_condition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSearch_condition(YQLParser.Search_conditionContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#row_pattern_variable_name}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRow_pattern_variable_name(YQLParser.Row_pattern_variable_nameContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#order_by_clause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOrder_by_clause(YQLParser.Order_by_clauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#ext_order_by_clause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExt_order_by_clause(YQLParser.Ext_order_by_clauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#group_by_clause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGroup_by_clause(YQLParser.Group_by_clauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#grouping_element_list}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGrouping_element_list(YQLParser.Grouping_element_listContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#grouping_element}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGrouping_element(YQLParser.Grouping_elementContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#ordinary_grouping_set}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOrdinary_grouping_set(YQLParser.Ordinary_grouping_setContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#ordinary_grouping_set_list}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOrdinary_grouping_set_list(YQLParser.Ordinary_grouping_set_listContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#rollup_list}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRollup_list(YQLParser.Rollup_listContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#cube_list}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCube_list(YQLParser.Cube_listContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#grouping_sets_specification}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGrouping_sets_specification(YQLParser.Grouping_sets_specificationContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#hopping_window_specification}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitHopping_window_specification(YQLParser.Hopping_window_specificationContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#result_column}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitResult_column(YQLParser.Result_columnContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#join_source}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitJoin_source(YQLParser.Join_sourceContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#named_column}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNamed_column(YQLParser.Named_columnContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#flatten_by_arg}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFlatten_by_arg(YQLParser.Flatten_by_argContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#flatten_source}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFlatten_source(YQLParser.Flatten_sourceContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#named_single_source}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNamed_single_source(YQLParser.Named_single_sourceContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#single_source}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSingle_source(YQLParser.Single_sourceContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#sample_clause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSample_clause(YQLParser.Sample_clauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#tablesample_clause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTablesample_clause(YQLParser.Tablesample_clauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#sampling_mode}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSampling_mode(YQLParser.Sampling_modeContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#repeatable_clause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRepeatable_clause(YQLParser.Repeatable_clauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#join_op}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitJoin_op(YQLParser.Join_opContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#join_constraint}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitJoin_constraint(YQLParser.Join_constraintContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#returning_columns_list}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitReturning_columns_list(YQLParser.Returning_columns_listContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#into_table_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInto_table_stmt(YQLParser.Into_table_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#into_values_source}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInto_values_source(YQLParser.Into_values_sourceContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#values_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitValues_stmt(YQLParser.Values_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#values_source}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitValues_source(YQLParser.Values_sourceContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#values_source_row_list}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitValues_source_row_list(YQLParser.Values_source_row_listContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#values_source_row}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitValues_source_row(YQLParser.Values_source_rowContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#simple_values_source}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSimple_values_source(YQLParser.Simple_values_sourceContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#create_external_data_source_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCreate_external_data_source_stmt(YQLParser.Create_external_data_source_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_external_data_source_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_external_data_source_stmt(YQLParser.Alter_external_data_source_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_external_data_source_action}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_external_data_source_action(YQLParser.Alter_external_data_source_actionContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#drop_external_data_source_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDrop_external_data_source_stmt(YQLParser.Drop_external_data_source_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#create_view_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCreate_view_stmt(YQLParser.Create_view_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#drop_view_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDrop_view_stmt(YQLParser.Drop_view_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#upsert_object_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUpsert_object_stmt(YQLParser.Upsert_object_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#create_object_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCreate_object_stmt(YQLParser.Create_object_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#create_object_features}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCreate_object_features(YQLParser.Create_object_featuresContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_object_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_object_stmt(YQLParser.Alter_object_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_object_features}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_object_features(YQLParser.Alter_object_featuresContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#drop_object_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDrop_object_stmt(YQLParser.Drop_object_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#drop_object_features}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDrop_object_features(YQLParser.Drop_object_featuresContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#object_feature_value}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitObject_feature_value(YQLParser.Object_feature_valueContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#object_feature_kv}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitObject_feature_kv(YQLParser.Object_feature_kvContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#object_feature_flag}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitObject_feature_flag(YQLParser.Object_feature_flagContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#object_feature}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitObject_feature(YQLParser.Object_featureContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#object_features}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitObject_features(YQLParser.Object_featuresContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#object_type_ref}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitObject_type_ref(YQLParser.Object_type_refContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#create_table_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCreate_table_stmt(YQLParser.Create_table_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#create_table_entry}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCreate_table_entry(YQLParser.Create_table_entryContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#create_backup_collection_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCreate_backup_collection_stmt(YQLParser.Create_backup_collection_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_backup_collection_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_backup_collection_stmt(YQLParser.Alter_backup_collection_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#drop_backup_collection_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDrop_backup_collection_stmt(YQLParser.Drop_backup_collection_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#create_backup_collection_entries}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCreate_backup_collection_entries(YQLParser.Create_backup_collection_entriesContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#create_backup_collection_entries_many}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCreate_backup_collection_entries_many(YQLParser.Create_backup_collection_entries_manyContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#table_list}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTable_list(YQLParser.Table_listContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_backup_collection_actions}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_backup_collection_actions(YQLParser.Alter_backup_collection_actionsContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_backup_collection_action}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_backup_collection_action(YQLParser.Alter_backup_collection_actionContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_backup_collection_entries}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_backup_collection_entries(YQLParser.Alter_backup_collection_entriesContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_backup_collection_entry}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_backup_collection_entry(YQLParser.Alter_backup_collection_entryContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#backup_collection}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBackup_collection(YQLParser.Backup_collectionContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#backup_collection_settings}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBackup_collection_settings(YQLParser.Backup_collection_settingsContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#backup_collection_settings_entry}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBackup_collection_settings_entry(YQLParser.Backup_collection_settings_entryContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#backup_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBackup_stmt(YQLParser.Backup_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#restore_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRestore_stmt(YQLParser.Restore_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_database_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_database_stmt(YQLParser.Alter_database_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#table_inherits}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTable_inherits(YQLParser.Table_inheritsContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#table_partition_by}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTable_partition_by(YQLParser.Table_partition_byContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#with_table_settings}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWith_table_settings(YQLParser.With_table_settingsContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#table_tablestore}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTable_tablestore(YQLParser.Table_tablestoreContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#table_settings_entry}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTable_settings_entry(YQLParser.Table_settings_entryContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#table_as_source}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTable_as_source(YQLParser.Table_as_sourceContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_table_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_table_stmt(YQLParser.Alter_table_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_table_action}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_table_action(YQLParser.Alter_table_actionContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_external_table_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_external_table_stmt(YQLParser.Alter_external_table_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_external_table_action}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_external_table_action(YQLParser.Alter_external_table_actionContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_table_store_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_table_store_stmt(YQLParser.Alter_table_store_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_table_store_action}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_table_store_action(YQLParser.Alter_table_store_actionContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_table_add_column}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_table_add_column(YQLParser.Alter_table_add_columnContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_table_drop_column}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_table_drop_column(YQLParser.Alter_table_drop_columnContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_table_alter_column}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_table_alter_column(YQLParser.Alter_table_alter_columnContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_table_alter_column_drop_not_null}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_table_alter_column_drop_not_null(YQLParser.Alter_table_alter_column_drop_not_nullContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_table_add_column_family}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_table_add_column_family(YQLParser.Alter_table_add_column_familyContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_table_alter_column_family}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_table_alter_column_family(YQLParser.Alter_table_alter_column_familyContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_table_set_table_setting_uncompat}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_table_set_table_setting_uncompat(YQLParser.Alter_table_set_table_setting_uncompatContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_table_set_table_setting_compat}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_table_set_table_setting_compat(YQLParser.Alter_table_set_table_setting_compatContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_table_reset_table_setting}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_table_reset_table_setting(YQLParser.Alter_table_reset_table_settingContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_table_add_index}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_table_add_index(YQLParser.Alter_table_add_indexContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_table_drop_index}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_table_drop_index(YQLParser.Alter_table_drop_indexContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_table_rename_to}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_table_rename_to(YQLParser.Alter_table_rename_toContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_table_rename_index_to}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_table_rename_index_to(YQLParser.Alter_table_rename_index_toContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_table_add_changefeed}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_table_add_changefeed(YQLParser.Alter_table_add_changefeedContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_table_alter_changefeed}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_table_alter_changefeed(YQLParser.Alter_table_alter_changefeedContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_table_drop_changefeed}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_table_drop_changefeed(YQLParser.Alter_table_drop_changefeedContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_table_alter_index}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_table_alter_index(YQLParser.Alter_table_alter_indexContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#column_schema}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitColumn_schema(YQLParser.Column_schemaContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#family_relation}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFamily_relation(YQLParser.Family_relationContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#opt_column_constraints}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOpt_column_constraints(YQLParser.Opt_column_constraintsContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#column_order_by_specification}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitColumn_order_by_specification(YQLParser.Column_order_by_specificationContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#table_constraint}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTable_constraint(YQLParser.Table_constraintContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#table_index}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTable_index(YQLParser.Table_indexContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#table_index_type}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTable_index_type(YQLParser.Table_index_typeContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#global_index}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGlobal_index(YQLParser.Global_indexContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#local_index}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLocal_index(YQLParser.Local_indexContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#index_subtype}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIndex_subtype(YQLParser.Index_subtypeContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#with_index_settings}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWith_index_settings(YQLParser.With_index_settingsContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#index_setting_entry}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIndex_setting_entry(YQLParser.Index_setting_entryContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#index_setting_value}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIndex_setting_value(YQLParser.Index_setting_valueContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#changefeed}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitChangefeed(YQLParser.ChangefeedContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#changefeed_settings}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitChangefeed_settings(YQLParser.Changefeed_settingsContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#changefeed_settings_entry}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitChangefeed_settings_entry(YQLParser.Changefeed_settings_entryContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#changefeed_setting_value}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitChangefeed_setting_value(YQLParser.Changefeed_setting_valueContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#changefeed_alter_settings}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitChangefeed_alter_settings(YQLParser.Changefeed_alter_settingsContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_table_setting_entry}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_table_setting_entry(YQLParser.Alter_table_setting_entryContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#table_setting_value}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTable_setting_value(YQLParser.Table_setting_valueContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#ttl_tier_list}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTtl_tier_list(YQLParser.Ttl_tier_listContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#ttl_tier_action}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTtl_tier_action(YQLParser.Ttl_tier_actionContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#family_entry}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFamily_entry(YQLParser.Family_entryContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#family_settings}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFamily_settings(YQLParser.Family_settingsContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#family_settings_entry}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFamily_settings_entry(YQLParser.Family_settings_entryContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#family_setting_value}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFamily_setting_value(YQLParser.Family_setting_valueContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#split_boundaries}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSplit_boundaries(YQLParser.Split_boundariesContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#literal_value_list}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLiteral_value_list(YQLParser.Literal_value_listContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_table_alter_index_action}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_table_alter_index_action(YQLParser.Alter_table_alter_index_actionContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#drop_table_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDrop_table_stmt(YQLParser.Drop_table_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#create_user_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCreate_user_stmt(YQLParser.Create_user_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_user_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_user_stmt(YQLParser.Alter_user_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#create_group_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCreate_group_stmt(YQLParser.Create_group_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_group_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_group_stmt(YQLParser.Alter_group_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#drop_role_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDrop_role_stmt(YQLParser.Drop_role_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#role_name}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRole_name(YQLParser.Role_nameContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#user_option}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUser_option(YQLParser.User_optionContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#authentication_option}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAuthentication_option(YQLParser.Authentication_optionContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#password_option}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPassword_option(YQLParser.Password_optionContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#password_value}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPassword_value(YQLParser.Password_valueContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#hash_option}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitHash_option(YQLParser.Hash_optionContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#login_option}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLogin_option(YQLParser.Login_optionContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#grant_permissions_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGrant_permissions_stmt(YQLParser.Grant_permissions_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#revoke_permissions_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRevoke_permissions_stmt(YQLParser.Revoke_permissions_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#permission_id}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPermission_id(YQLParser.Permission_idContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#permission_name}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPermission_name(YQLParser.Permission_nameContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#permission_name_target}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPermission_name_target(YQLParser.Permission_name_targetContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#create_resource_pool_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCreate_resource_pool_stmt(YQLParser.Create_resource_pool_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_resource_pool_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_resource_pool_stmt(YQLParser.Alter_resource_pool_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_resource_pool_action}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_resource_pool_action(YQLParser.Alter_resource_pool_actionContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#drop_resource_pool_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDrop_resource_pool_stmt(YQLParser.Drop_resource_pool_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#create_resource_pool_classifier_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCreate_resource_pool_classifier_stmt(YQLParser.Create_resource_pool_classifier_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_resource_pool_classifier_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_resource_pool_classifier_stmt(YQLParser.Alter_resource_pool_classifier_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_resource_pool_classifier_action}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_resource_pool_classifier_action(YQLParser.Alter_resource_pool_classifier_actionContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#drop_resource_pool_classifier_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDrop_resource_pool_classifier_stmt(YQLParser.Drop_resource_pool_classifier_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#create_replication_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCreate_replication_stmt(YQLParser.Create_replication_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#replication_target}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitReplication_target(YQLParser.Replication_targetContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#replication_settings}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitReplication_settings(YQLParser.Replication_settingsContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#replication_settings_entry}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitReplication_settings_entry(YQLParser.Replication_settings_entryContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_replication_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_replication_stmt(YQLParser.Alter_replication_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_replication_action}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_replication_action(YQLParser.Alter_replication_actionContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_replication_set_setting}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_replication_set_setting(YQLParser.Alter_replication_set_settingContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#drop_replication_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDrop_replication_stmt(YQLParser.Drop_replication_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#lambda_or_parameter}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLambda_or_parameter(YQLParser.Lambda_or_parameterContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#create_transfer_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCreate_transfer_stmt(YQLParser.Create_transfer_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#transfer_settings}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTransfer_settings(YQLParser.Transfer_settingsContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#transfer_settings_entry}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTransfer_settings_entry(YQLParser.Transfer_settings_entryContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_transfer_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_transfer_stmt(YQLParser.Alter_transfer_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_transfer_action}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_transfer_action(YQLParser.Alter_transfer_actionContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_transfer_set_setting}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_transfer_set_setting(YQLParser.Alter_transfer_set_settingContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_transfer_set_using}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_transfer_set_using(YQLParser.Alter_transfer_set_usingContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#drop_transfer_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDrop_transfer_stmt(YQLParser.Drop_transfer_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#action_or_subquery_args}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAction_or_subquery_args(YQLParser.Action_or_subquery_argsContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#define_action_or_subquery_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDefine_action_or_subquery_stmt(YQLParser.Define_action_or_subquery_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#define_action_or_subquery_body}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDefine_action_or_subquery_body(YQLParser.Define_action_or_subquery_bodyContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#if_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIf_stmt(YQLParser.If_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#for_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFor_stmt(YQLParser.For_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#table_ref}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTable_ref(YQLParser.Table_refContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#table_key}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTable_key(YQLParser.Table_keyContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#table_arg}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTable_arg(YQLParser.Table_argContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#table_hints}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTable_hints(YQLParser.Table_hintsContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#table_hint}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTable_hint(YQLParser.Table_hintContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#object_ref}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitObject_ref(YQLParser.Object_refContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#simple_table_ref_core}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSimple_table_ref_core(YQLParser.Simple_table_ref_coreContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#simple_table_ref}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSimple_table_ref(YQLParser.Simple_table_refContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#into_simple_table_ref}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInto_simple_table_ref(YQLParser.Into_simple_table_refContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#delete_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDelete_stmt(YQLParser.Delete_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#update_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUpdate_stmt(YQLParser.Update_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#set_clause_choice}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSet_clause_choice(YQLParser.Set_clause_choiceContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#set_clause_list}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSet_clause_list(YQLParser.Set_clause_listContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#set_clause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSet_clause(YQLParser.Set_clauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#set_target}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSet_target(YQLParser.Set_targetContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#multiple_column_assignment}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMultiple_column_assignment(YQLParser.Multiple_column_assignmentContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#set_target_list}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSet_target_list(YQLParser.Set_target_listContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#create_topic_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCreate_topic_stmt(YQLParser.Create_topic_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#create_topic_entries}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCreate_topic_entries(YQLParser.Create_topic_entriesContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#create_topic_entry}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCreate_topic_entry(YQLParser.Create_topic_entryContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#with_topic_settings}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWith_topic_settings(YQLParser.With_topic_settingsContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_topic_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_topic_stmt(YQLParser.Alter_topic_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_topic_action}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_topic_action(YQLParser.Alter_topic_actionContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_topic_add_consumer}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_topic_add_consumer(YQLParser.Alter_topic_add_consumerContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#topic_create_consumer_entry}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTopic_create_consumer_entry(YQLParser.Topic_create_consumer_entryContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_topic_alter_consumer}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_topic_alter_consumer(YQLParser.Alter_topic_alter_consumerContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_topic_alter_consumer_entry}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_topic_alter_consumer_entry(YQLParser.Alter_topic_alter_consumer_entryContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_topic_drop_consumer}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_topic_drop_consumer(YQLParser.Alter_topic_drop_consumerContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#topic_alter_consumer_set}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTopic_alter_consumer_set(YQLParser.Topic_alter_consumer_setContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#topic_alter_consumer_reset}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTopic_alter_consumer_reset(YQLParser.Topic_alter_consumer_resetContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_topic_set_settings}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_topic_set_settings(YQLParser.Alter_topic_set_settingsContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_topic_reset_settings}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_topic_reset_settings(YQLParser.Alter_topic_reset_settingsContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#drop_topic_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDrop_topic_stmt(YQLParser.Drop_topic_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#topic_settings}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTopic_settings(YQLParser.Topic_settingsContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#topic_settings_entry}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTopic_settings_entry(YQLParser.Topic_settings_entryContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#topic_setting_value}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTopic_setting_value(YQLParser.Topic_setting_valueContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#topic_consumer_with_settings}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTopic_consumer_with_settings(YQLParser.Topic_consumer_with_settingsContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#topic_consumer_settings}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTopic_consumer_settings(YQLParser.Topic_consumer_settingsContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#topic_consumer_settings_entry}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTopic_consumer_settings_entry(YQLParser.Topic_consumer_settings_entryContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#topic_consumer_setting_value}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTopic_consumer_setting_value(YQLParser.Topic_consumer_setting_valueContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#topic_ref}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTopic_ref(YQLParser.Topic_refContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#topic_consumer_ref}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTopic_consumer_ref(YQLParser.Topic_consumer_refContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#null_treatment}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNull_treatment(YQLParser.Null_treatmentContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#filter_clause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFilter_clause(YQLParser.Filter_clauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#window_name_or_specification}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWindow_name_or_specification(YQLParser.Window_name_or_specificationContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#window_name}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWindow_name(YQLParser.Window_nameContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#window_clause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWindow_clause(YQLParser.Window_clauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#window_definition_list}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWindow_definition_list(YQLParser.Window_definition_listContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#window_definition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWindow_definition(YQLParser.Window_definitionContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#new_window_name}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNew_window_name(YQLParser.New_window_nameContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#window_specification}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWindow_specification(YQLParser.Window_specificationContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#window_specification_details}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWindow_specification_details(YQLParser.Window_specification_detailsContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#existing_window_name}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExisting_window_name(YQLParser.Existing_window_nameContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#window_partition_clause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWindow_partition_clause(YQLParser.Window_partition_clauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#window_order_clause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWindow_order_clause(YQLParser.Window_order_clauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#window_frame_clause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWindow_frame_clause(YQLParser.Window_frame_clauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#window_frame_units}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWindow_frame_units(YQLParser.Window_frame_unitsContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#window_frame_extent}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWindow_frame_extent(YQLParser.Window_frame_extentContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#window_frame_between}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWindow_frame_between(YQLParser.Window_frame_betweenContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#window_frame_bound}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWindow_frame_bound(YQLParser.Window_frame_boundContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#window_frame_exclusion}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWindow_frame_exclusion(YQLParser.Window_frame_exclusionContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#use_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUse_stmt(YQLParser.Use_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#subselect_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSubselect_stmt(YQLParser.Subselect_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#named_nodes_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNamed_nodes_stmt(YQLParser.Named_nodes_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#commit_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCommit_stmt(YQLParser.Commit_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#rollback_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRollback_stmt(YQLParser.Rollback_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#analyze_table}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAnalyze_table(YQLParser.Analyze_tableContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#analyze_table_list}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAnalyze_table_list(YQLParser.Analyze_table_listContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#analyze_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAnalyze_stmt(YQLParser.Analyze_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_sequence_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_sequence_stmt(YQLParser.Alter_sequence_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#alter_sequence_action}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlter_sequence_action(YQLParser.Alter_sequence_actionContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#show_create_table_stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitShow_create_table_stmt(YQLParser.Show_create_table_stmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#identifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIdentifier(YQLParser.IdentifierContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#id}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitId(YQLParser.IdContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#id_schema}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitId_schema(YQLParser.Id_schemaContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#id_expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitId_expr(YQLParser.Id_exprContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#id_expr_in}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitId_expr_in(YQLParser.Id_expr_inContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#id_window}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitId_window(YQLParser.Id_windowContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#id_table}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitId_table(YQLParser.Id_tableContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#id_without}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitId_without(YQLParser.Id_withoutContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#id_hint}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitId_hint(YQLParser.Id_hintContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#id_as_compat}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitId_as_compat(YQLParser.Id_as_compatContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#an_id}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAn_id(YQLParser.An_idContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#an_id_or_type}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAn_id_or_type(YQLParser.An_id_or_typeContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#an_id_schema}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAn_id_schema(YQLParser.An_id_schemaContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#an_id_expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAn_id_expr(YQLParser.An_id_exprContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#an_id_expr_in}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAn_id_expr_in(YQLParser.An_id_expr_inContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#an_id_window}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAn_id_window(YQLParser.An_id_windowContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#an_id_table}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAn_id_table(YQLParser.An_id_tableContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#an_id_without}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAn_id_without(YQLParser.An_id_withoutContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#an_id_hint}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAn_id_hint(YQLParser.An_id_hintContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#an_id_pure}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAn_id_pure(YQLParser.An_id_pureContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#an_id_as_compat}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAn_id_as_compat(YQLParser.An_id_as_compatContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#view_name}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitView_name(YQLParser.View_nameContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#opt_id_prefix}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOpt_id_prefix(YQLParser.Opt_id_prefixContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#cluster_expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCluster_expr(YQLParser.Cluster_exprContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#id_or_type}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitId_or_type(YQLParser.Id_or_typeContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#opt_id_prefix_or_type}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOpt_id_prefix_or_type(YQLParser.Opt_id_prefix_or_typeContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#id_or_at}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitId_or_at(YQLParser.Id_or_atContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#id_table_or_type}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitId_table_or_type(YQLParser.Id_table_or_typeContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#id_table_or_at}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitId_table_or_at(YQLParser.Id_table_or_atContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#keyword}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitKeyword(YQLParser.KeywordContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#keyword_expr_uncompat}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitKeyword_expr_uncompat(YQLParser.Keyword_expr_uncompatContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#keyword_table_uncompat}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitKeyword_table_uncompat(YQLParser.Keyword_table_uncompatContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#keyword_select_uncompat}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitKeyword_select_uncompat(YQLParser.Keyword_select_uncompatContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#keyword_alter_uncompat}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitKeyword_alter_uncompat(YQLParser.Keyword_alter_uncompatContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#keyword_in_uncompat}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitKeyword_in_uncompat(YQLParser.Keyword_in_uncompatContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#keyword_window_uncompat}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitKeyword_window_uncompat(YQLParser.Keyword_window_uncompatContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#keyword_hint_uncompat}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitKeyword_hint_uncompat(YQLParser.Keyword_hint_uncompatContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#keyword_as_compat}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitKeyword_as_compat(YQLParser.Keyword_as_compatContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#keyword_compat}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitKeyword_compat(YQLParser.Keyword_compatContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#type_id}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitType_id(YQLParser.Type_idContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#bool_value}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBool_value(YQLParser.Bool_valueContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#real}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitReal(YQLParser.RealContext ctx);
	/**
	 * Visit a parse tree produced by {@link YQLParser#integer}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInteger(YQLParser.IntegerContext ctx);
}